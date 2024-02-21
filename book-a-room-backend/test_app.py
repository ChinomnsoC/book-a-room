from fastapi import FastAPI
from fastapi.testclient import TestClient

from app import app, room

client = TestClient(app)


# Define test cases
def test_root():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Hello World"}
    
def test_get_rooms_by_category():
    # Test valid category
    response = client.get("/rooms/ensuite")
    assert response.status_code == 200

    # Test invalid category
    response = client.get("/rooms/invalid_category")
    assert response.status_code == 404
    assert response.json() == {"detail": "Rooms not found for the given category"}
    
def test_get_rooms_by_building():
    # Test valid building
    response = client.get("/building/building_1")
    assert response.status_code == 200
    assert len(response.json()) > 0

    # Test invalid building
    response = client.get("/building/invalid_building")
    assert response.status_code == 404
    assert response.json() == {"detail": "Building not found"}