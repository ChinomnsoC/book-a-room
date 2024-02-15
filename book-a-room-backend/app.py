from fastapi import FastAPI, HTTPException #BaseModel
from fastapi.middleware.cors import CORSMiddleware
from typing import List

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

# class Room(BaseModel):
#     id: int
#     category: str
#     available_rooms: int
#     amenities: str
#     walking_distance: int
#     driving_distance: int
#     image: str
#     price: float

@app.get("/")
async def root():
    return {"message": "Hello World"}
    
@app.get("/api/rooms/{category}")
async def get_rooms_by_category(building: str, category: str):
    if building not in rooms:
        raise HTTPException(status_code=404, detail="Building not found")
    
    rooms = rooms[building]
    selected_room = [room for room in rooms if room["category"] == category]
    return selected_room

@app.get("/api/rooms/{building}")
async def get_rooms_by_building(building: str):
    if building not in rooms:
        raise HTTPException(status_code=404, detail="Building not found")
    
    return rooms[building]

if __name__ == '__main__':
    app.run(debug=True)