import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

interface Room {
    id: number;
    name: string;
    amenities: string;
    walkingDistance: number;
    drivingDistance: number
    image: string;
    price: number;
}

const RoomListings: React.FC = () => {
    // State for storing room data
    const [availableRooms, setAvailableRooms] = useState<Room[]>([]); //useState(() => Room());
    const { category } = useParams<{ category: string }>();

    useEffect(() => {
        const fetchRooms = async() => {
            try{
                const response = await axios.get(`/api/rooms/${category}`);
                setAvailableRooms(response.data);
            } catch(err){
                console.log("Unable to fetch available rooms:", err);
            }
        }
        fetchRooms();
    }, [category]);

    return (
        <div className="room-listings">
            <h2>{category} Available ${category} Rooms</h2>
            {availableRooms.map(room => (
                <div key={room.id}>
                    <img src={room.image} alt={room.name} />
                    <h3>{room.name}</h3>
                    <p>{room.amenities}</p>
                    <p>{room.walkingDistance} mins walking distance, {room.drivingDistance} mins drive to the hall.</p>
                    <p>Price for the duration of the meeting: {room.price} NGN</p>
                </div>
            ))}
        </div>
    );
}