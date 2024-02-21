from fastapi import FastAPI, HTTPException #BaseModel
from fastapi.middleware.cors import CORSMiddleware
from typing import List

from pydantic import BaseModel

from room_data import rooms


app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=['http://localhost:3000'],  # Adjust as needed
    allow_credentials=True,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)

class Room(BaseModel):
    id: int
    category: str
    building_name: str
    available_rooms: int
    amenities: str
    walking_distance: int
    driving_distance: int
    image: str
    price: float

# mock database
room = {}

@app.get("/")
async def root():
    return {"message": "Hello World"}
    
@app.get("/rooms/{category}")
async def get_rooms_by_category(category: str):
    global rooms
    selected_rooms = []
    for building_rooms in rooms.values():
        selected_rooms.extend([room for room in building_rooms if room["category"] == category])
        print(selected_rooms)
    if not selected_rooms:
        raise HTTPException(status_code=404, detail="Rooms not found for the given category")
    return selected_rooms

@app.get("/building/{building}")
async def get_rooms_by_building(building: str):
    if building not in rooms:
        raise HTTPException(status_code=404, detail="Building not found")
    
    return rooms[building]

if __name__ == '__main__':
    app.run(debug=True)