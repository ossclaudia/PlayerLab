from dotenv import load_dotenv
from pathlib import Path
ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

from fastapi import FastAPI, APIRouter, HTTPException, Depends, Request, Response
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import csv
import io
import bcrypt
import jwt
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone, timedelta


# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

JWT_SECRET = os.environ['JWT_SECRET']
JWT_ALGORITHM = "HS256"
TOKEN_EXPIRY_DAYS = 7

app = FastAPI(title="PlayerLab API")
api_router = APIRouter(prefix="/api")
auth_router = APIRouter(prefix="/api/auth", tags=["auth"])
admin_router = APIRouter(prefix="/api/admin", tags=["admin"])


# -------------------- Models --------------------
class Registration(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    player_name: str
    age: int
    parent_name: Optional[str] = None
    email: EmailStr
    phone: str
    lab_interest: str
    position: Optional[str] = None
    message: Optional[str] = None
    status: str = "new"  # new | contacted | accepted | rejected
    notes: Optional[str] = None
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    updated_at: Optional[datetime] = None


class RegistrationCreate(BaseModel):
    player_name: str = Field(..., min_length=2, max_length=100)
    age: int = Field(..., ge=6, le=25)
    parent_name: Optional[str] = Field(None, max_length=100)
    email: EmailStr
    phone: str = Field(..., min_length=6, max_length=30)
    lab_interest: str = Field(..., pattern="^(technique|performance|position|all)$")
    position: Optional[str] = Field(None, max_length=50)
    message: Optional[str] = Field(None, max_length=1000)


class RegistrationOut(BaseModel):
    id: str
    player_name: str
    age: int
    parent_name: Optional[str] = None
    email: EmailStr
    phone: str
    lab_interest: str
    position: Optional[str] = None
    message: Optional[str] = None
    status: str
    notes: Optional[str] = None
    created_at: datetime
    updated_at: Optional[datetime] = None


class RegistrationUpdate(BaseModel):
    status: Optional[str] = Field(None, pattern="^(new|contacted|accepted|rejected)$")
    notes: Optional[str] = Field(None, max_length=2000)


class LoginRequest(BaseModel):
    email: EmailStr
    password: str


class LoginResponse(BaseModel):
    token: str
    email: EmailStr
    role: str


class UserMe(BaseModel):
    email: EmailStr
    role: str


# -------------------- Auth utils --------------------
def hash_password(password: str) -> str:
    return bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt()).decode("utf-8")


def verify_password(plain: str, hashed: str) -> bool:
    try:
        return bcrypt.checkpw(plain.encode("utf-8"), hashed.encode("utf-8"))
    except Exception:
        return False


def create_token(email: str, role: str) -> str:
    payload = {
        "sub": email,
        "role": role,
        "exp": datetime.now(timezone.utc) + timedelta(days=TOKEN_EXPIRY_DAYS),
        "iat": datetime.now(timezone.utc),
    }
    return jwt.encode(payload, JWT_SECRET, algorithm=JWT_ALGORITHM)


async def get_current_admin(request: Request) -> dict:
    auth = request.headers.get("Authorization", "")
    if not auth.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Não autenticado")
    token = auth[7:]
    try:
        payload = jwt.decode(token, JWT_SECRET, algorithms=[JWT_ALGORITHM])
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Sessão expirada")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Token inválido")
    email = payload.get("sub")
    user = await db.admins.find_one({"email": email}, {"_id": 0, "password_hash": 0})
    if not user or user.get("role") != "admin":
        raise HTTPException(status_code=401, detail="Não autorizado")
    return user


# -------------------- Public routes --------------------
@api_router.get("/")
async def root():
    return {"message": "PlayerLab API", "status": "ok"}


@api_router.post("/registrations", response_model=RegistrationOut, status_code=201)
async def create_registration(payload: RegistrationCreate):
    reg = Registration(**payload.model_dump())
    doc = reg.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    if doc.get('updated_at'):
        doc['updated_at'] = doc['updated_at'].isoformat()
    await db.registrations.insert_one(doc)
    return RegistrationOut(**reg.model_dump())


@api_router.get("/stats")
async def get_stats():
    total = await db.registrations.count_documents({})
    return {
        "total_registrations": total,
        "labs": ["technique", "performance", "position"],
        "location": "Campos de Sanguedo, Portugal",
    }


# -------------------- Auth routes --------------------
@auth_router.post("/login", response_model=LoginResponse)
async def login(payload: LoginRequest):
    email = payload.email.lower().strip()
    user = await db.admins.find_one({"email": email})
    if not user or not verify_password(payload.password, user["password_hash"]):
        raise HTTPException(status_code=401, detail="Credenciais inválidas")
    token = create_token(user["email"], user["role"])
    return LoginResponse(token=token, email=user["email"], role=user["role"])


@auth_router.get("/me", response_model=UserMe)
async def me(current=Depends(get_current_admin)):
    return UserMe(email=current["email"], role=current["role"])


# -------------------- Admin routes --------------------
def _normalize_reg(doc: dict) -> RegistrationOut:
    ca = doc.get("created_at")
    if isinstance(ca, str):
        ca = datetime.fromisoformat(ca)
    ua = doc.get("updated_at")
    if isinstance(ua, str):
        ua = datetime.fromisoformat(ua)
    return RegistrationOut(
        id=doc["id"],
        player_name=doc["player_name"],
        age=doc["age"],
        parent_name=doc.get("parent_name"),
        email=doc["email"],
        phone=doc["phone"],
        lab_interest=doc["lab_interest"],
        position=doc.get("position"),
        message=doc.get("message"),
        status=doc.get("status", "new"),
        notes=doc.get("notes"),
        created_at=ca,
        updated_at=ua,
    )


@admin_router.get("/registrations", response_model=List[RegistrationOut])
async def admin_list_registrations(
    status: Optional[str] = None,
    lab: Optional[str] = None,
    q: Optional[str] = None,
    current=Depends(get_current_admin),
):
    query = {}
    if status and status != "all":
        query["status"] = status
    if lab and lab != "all":
        query["lab_interest"] = lab
    if q:
        query["$or"] = [
            {"player_name": {"$regex": q, "$options": "i"}},
            {"email": {"$regex": q, "$options": "i"}},
            {"phone": {"$regex": q, "$options": "i"}},
        ]
    items = await db.registrations.find(query, {"_id": 0}).sort("created_at", -1).to_list(1000)
    return [_normalize_reg(it) for it in items]


@admin_router.get("/registrations/stats")
async def admin_stats(current=Depends(get_current_admin)):
    total = await db.registrations.count_documents({})
    pipeline = [{"$group": {"_id": "$status", "count": {"$sum": 1}}}]
    by_status_cursor = db.registrations.aggregate(pipeline)
    by_status = {row["_id"] or "new": row["count"] async for row in by_status_cursor}
    pipeline_lab = [{"$group": {"_id": "$lab_interest", "count": {"$sum": 1}}}]
    by_lab_cursor = db.registrations.aggregate(pipeline_lab)
    by_lab = {row["_id"]: row["count"] async for row in by_lab_cursor}
    return {
        "total": total,
        "by_status": by_status,
        "by_lab": by_lab,
    }


@admin_router.patch("/registrations/{reg_id}", response_model=RegistrationOut)
async def admin_update_registration(
    reg_id: str, payload: RegistrationUpdate, current=Depends(get_current_admin)
):
    update_doc = {k: v for k, v in payload.model_dump().items() if v is not None}
    if not update_doc:
        raise HTTPException(status_code=400, detail="Sem alterações")
    update_doc["updated_at"] = datetime.now(timezone.utc).isoformat()
    result = await db.registrations.update_one({"id": reg_id}, {"$set": update_doc})
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Inscrição não encontrada")
    doc = await db.registrations.find_one({"id": reg_id}, {"_id": 0})
    return _normalize_reg(doc)


@admin_router.delete("/registrations/{reg_id}", status_code=204)
async def admin_delete_registration(reg_id: str, current=Depends(get_current_admin)):
    result = await db.registrations.delete_one({"id": reg_id})
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Inscrição não encontrada")
    return Response(status_code=204)


@admin_router.get("/registrations/export.csv")
async def admin_export_csv(current=Depends(get_current_admin)):
    items = await db.registrations.find({}, {"_id": 0}).sort("created_at", -1).to_list(5000)
    output = io.StringIO()
    writer = csv.writer(output)
    writer.writerow([
        "id", "player_name", "age", "parent_name", "email", "phone",
        "lab_interest", "position", "status", "notes", "message", "created_at",
    ])
    for it in items:
        writer.writerow([
            it.get("id", ""),
            it.get("player_name", ""),
            it.get("age", ""),
            it.get("parent_name", ""),
            it.get("email", ""),
            it.get("phone", ""),
            it.get("lab_interest", ""),
            it.get("position", ""),
            it.get("status", "new"),
            (it.get("notes") or "").replace("\n", " "),
            (it.get("message") or "").replace("\n", " "),
            it.get("created_at", ""),
        ])
    csv_content = output.getvalue()
    return Response(
        content=csv_content,
        media_type="text/csv",
        headers={"Content-Disposition": 'attachment; filename="playerlab-registrations.csv"'},
    )


# -------------------- Startup --------------------
async def seed_admin():
    email = os.environ.get("ADMIN_EMAIL", "admin@playerlab.pt").lower().strip()
    password = os.environ.get("ADMIN_PASSWORD", "PlayerLab2026!")
    existing = await db.admins.find_one({"email": email})
    if not existing:
        await db.admins.insert_one({
            "email": email,
            "password_hash": hash_password(password),
            "role": "admin",
            "created_at": datetime.now(timezone.utc).isoformat(),
        })
        logging.info("Seeded admin user %s", email)
    else:
        # Re-hash if env password changed
        if not verify_password(password, existing["password_hash"]):
            await db.admins.update_one(
                {"email": email},
                {"$set": {"password_hash": hash_password(password)}},
            )
            logging.info("Updated admin password for %s", email)


@app.on_event("startup")
async def on_startup():
    await seed_admin()


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()


# Register routers
app.include_router(api_router)
app.include_router(auth_router)
app.include_router(admin_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)
