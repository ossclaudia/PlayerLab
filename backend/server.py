from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI(title="PlayerLab API")
api_router = APIRouter(prefix="/api")


# -------------------- Models --------------------
class Registration(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    player_name: str
    age: int
    parent_name: Optional[str] = None
    email: EmailStr
    phone: str
    lab_interest: str  # technique | performance | position | all
    position: Optional[str] = None
    message: Optional[str] = None
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class RegistrationCreate(BaseModel):
    player_name: str = Field(..., min_length=2, max_length=100)
    age: int = Field(..., ge=6, le=25)
    parent_name: Optional[str] = Field(None, max_length=100)
    email: EmailStr
    phone: str = Field(..., min_length=6, max_length=30)
    lab_interest: str = Field(..., pattern="^(technique|performance|position|all)$")
    position: Optional[str] = Field(None, max_length=50)
    message: Optional[str] = Field(None, max_length=1000)


class RegistrationResponse(BaseModel):
    id: str
    player_name: str
    email: EmailStr
    lab_interest: str
    created_at: datetime


# -------------------- Routes --------------------
@api_router.get("/")
async def root():
    return {"message": "PlayerLab API", "status": "ok"}


@api_router.post("/registrations", response_model=RegistrationResponse, status_code=201)
async def create_registration(payload: RegistrationCreate):
    reg = Registration(**payload.model_dump())
    doc = reg.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()
    await db.registrations.insert_one(doc)
    return RegistrationResponse(
        id=reg.id,
        player_name=reg.player_name,
        email=reg.email,
        lab_interest=reg.lab_interest,
        created_at=reg.created_at,
    )


@api_router.get("/registrations", response_model=List[RegistrationResponse])
async def list_registrations():
    items = await db.registrations.find({}, {"_id": 0}).sort("created_at", -1).to_list(200)
    result = []
    for it in items:
        ca = it.get('created_at')
        if isinstance(ca, str):
            ca = datetime.fromisoformat(ca)
        result.append(RegistrationResponse(
            id=it['id'],
            player_name=it['player_name'],
            email=it['email'],
            lab_interest=it['lab_interest'],
            created_at=ca,
        ))
    return result


@api_router.get("/stats")
async def get_stats():
    total = await db.registrations.count_documents({})
    return {
        "total_registrations": total,
        "labs": ["technique", "performance", "position"],
        "location": "Campos de Sanguedo, Portugal",
    }


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
