import React from 'react';
import { Link } from 'react-router-dom';


const RoomCategories: React.FC = () => {
  return (
      <div>
          <h2>Room Categories</h2>
          <Link to="/rooms/ensuite">
              <button>Ensuite Bedrooms</button>
          </Link>
          <Link to="/rooms/group">
              <button>Group Rooms</button>
          </Link>
          <Link to="/rooms/hostel">
              <button>Hostels</button>
          </Link>
      </div>
  );
};

export default RoomCategories;
