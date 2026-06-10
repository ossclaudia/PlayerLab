import os
import pytest
import requests

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', 'https://develop-your-game.preview.emergentagent.com').rstrip('/')
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---- Health ----
def test_root_status_ok(client):
    r = client.get(f"{API}/")
    assert r.status_code == 200
    data = r.json()
    assert data.get("status") == "ok"
    assert "PlayerLab" in data.get("message", "")


# ---- Stats ----
def test_stats_returns_total_and_labs(client):
    r = client.get(f"{API}/stats")
    assert r.status_code == 200
    data = r.json()
    assert "total_registrations" in data
    assert isinstance(data["total_registrations"], int)
    assert isinstance(data["labs"], list)
    assert set(["technique", "performance", "position"]).issubset(set(data["labs"]))


# ---- Registration: create + persistence ----
def test_create_registration_valid(client):
    payload = {
        "player_name": "TEST_Joao Silva",
        "age": 14,
        "parent_name": "TEST_Maria Silva",
        "email": "test_joao@example.com",
        "phone": "+351912345678",
        "lab_interest": "technique",
        "position": "midfielder",
        "message": "Quero treinar",
    }
    r = client.post(f"{API}/registrations", json=payload)
    assert r.status_code == 201, r.text
    data = r.json()
    assert data["player_name"] == payload["player_name"]
    assert data["email"] == payload["email"]
    assert data["lab_interest"] == "technique"
    assert isinstance(data["id"], str) and len(data["id"]) > 0

    # GET list and ensure recently created appears
    r2 = client.get(f"{API}/registrations")
    assert r2.status_code == 200
    items = r2.json()
    assert isinstance(items, list)
    ids = [x["id"] for x in items]
    assert data["id"] in ids
    # most recent first
    assert items[0]["id"] == data["id"]


# ---- Validation ----
def test_missing_required_fields(client):
    r = client.post(f"{API}/registrations", json={"player_name": "x"})
    assert r.status_code == 422


def test_invalid_email(client):
    payload = {
        "player_name": "TEST_A",
        "age": 14,
        "email": "not-an-email",
        "phone": "+351912345678",
        "lab_interest": "technique",
    }
    r = client.post(f"{API}/registrations", json=payload)
    assert r.status_code == 422


@pytest.mark.parametrize("age", [5, 30])
def test_age_out_of_bounds(client, age):
    payload = {
        "player_name": "TEST_Age",
        "age": age,
        "email": "test_age@example.com",
        "phone": "+351912345678",
        "lab_interest": "technique",
    }
    r = client.post(f"{API}/registrations", json=payload)
    assert r.status_code == 422


def test_invalid_lab_interest(client):
    payload = {
        "player_name": "TEST_Lab",
        "age": 14,
        "email": "test_lab@example.com",
        "phone": "+351912345678",
        "lab_interest": "invalid_value",
    }
    r = client.post(f"{API}/registrations", json=payload)
    assert r.status_code == 422


def test_lab_interest_all_valid(client):
    payload = {
        "player_name": "TEST_All",
        "age": 16,
        "email": "test_all@example.com",
        "phone": "+351912345678",
        "lab_interest": "all",
    }
    r = client.post(f"{API}/registrations", json=payload)
    assert r.status_code == 201
