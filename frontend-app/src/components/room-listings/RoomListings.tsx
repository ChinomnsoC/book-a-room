import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getRoomsByCategory } from "../../services/api";

interface Room {
    id: number;
    category: string;
    building_name: string;
    availableRooms: number;
    amenities: string;
    walkingDistance: number;
    drivingDistance: number
    image: string;
    price: number;
}

const RoomListings: React.FC = () => {
    // State for storing room data
    const { category } = useParams<{ category?: string }>();
    const [availableRooms, setAvailableRooms] = useState<Room[]>([]); //useState(() => Room());

    useEffect(() => {
        if (!category || !["ensuite", "hostel", "group"].includes(category)) {
            console.error("Category parameter is missing.");
            return;
        }
        const fetchRooms = async() => {
            try{
                const roomsData = await getRoomsByCategory(category);
                setAvailableRooms(roomsData);
            } catch(err){
                console.log("Unable to fetch available rooms:", err);
            }
        }
        fetchRooms();
    }, [category]);

    function capitalizeFirstLetter(str: string): string {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        <div className="room-listings">
            <h2> Available {category} Rooms</h2>
            {availableRooms.map(room => (
                <div key={room.id}>
                    <img src={room.image} alt={room.category} />
                    <h3>{capitalizeFirstLetter(room.building_name)}, {capitalizeFirstLetter(room.category)}</h3>
                    <p>{room.amenities}</p>
                    <p>{room.walkingDistance} mins walking distance, {room.drivingDistance} mins drive to the hall.</p>
                    <p>Price for the duration of the meeting: {room.price} NGN</p>
                </div>
            ))}
        </div>
    );
};

export default RoomListings