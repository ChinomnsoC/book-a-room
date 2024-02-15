import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { getRoomsByCategory } from "../../services/api";

interface Room {
    id: number;
    category: string;
    availableRooms: number;
    amenities: string;
    walkingDistance: number;
    drivingDistance: number
    image: string;
    price: number;
}

const RoomListings: React.FC = () => {
    // State for storing room data
    const { building, category } = useParams<{ building?: string; category?: string }>();
    const [availableRooms, setAvailableRooms] = useState<Room[]>([]); //useState(() => Room());

    useEffect(() => {
        if (building && category) {
            const fetchRooms = async() => {
                try{
                    const roomsData = await getRoomsByCategory(building, category);
                    setAvailableRooms(roomsData);
                } catch(err){
                    console.log("Unable to fetch available rooms:", err);
                }
            }
            fetchRooms();
        }
        
    }, [building, category]);

    return (
        <div className="room-listings">
            <h2> Available {category} Rooms</h2>
            {availableRooms.map(room => (
                <div key={room.id}>
                    <img src={room.image} alt={room.category} />
                    <h3>{room.category}</h3>
                    <p>{room.amenities}</p>
                    <p>{room.walkingDistance} mins walking distance, {room.drivingDistance} mins drive to the hall.</p>
                    <p>Price for the duration of the meeting: {room.price} NGN</p>
                </div>
            ))}
        </div>
    );
};

export default RoomListings