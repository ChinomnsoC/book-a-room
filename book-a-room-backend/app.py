from fastapi import FastAPI, HTTPException, BaseModel
from typing import List, Optional

from room_data import room_data


app = FastAPI()

class Room(BaseModel):
    id: int
    building: str
    category: str
    available_rooms: int
    amenities: str
    walking_distance: int
    driving_distance: int
    image: str
    price: float
    
@app.get("/api/rooms/{category}")
async def get_rooms_by_category(building: str, category: str):
    if building not in room_data:
        raise HTTPException(status_code=404, detail="Building not found")
    
    rooms = room_data[building]
    selected_room = [room for room in rooms if room["category"] == category]
    return selected_room

@app.get("/api/rooms/{building}")
async def get_rooms_by_building(building: str):
    if building not in room_data:
        raise HTTPException(status_code=404, detail="Building not found")
    
    return room_data[building]

if __name__ == '__main__':
    app.run(debug=True)