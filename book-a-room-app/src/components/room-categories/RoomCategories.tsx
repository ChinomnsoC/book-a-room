import React from 'react';

import EnsuiteBedrooms from './ensuite-bedrooms/EnsuiteBedrooms';
import GroupRooms from './group-rooms/GroupRooms';
import Hostels from './hostels/Hostels';


interface RoomCategoriesProps {
  onSelectCategory: (category: string) => void;
}

const RoomCategories: React.FC<RoomCategoriesProps> = ({ onSelectCategory }) => {

  return (
    <div className="room-categories">
      <h2>Room Categories</h2>
      <div className="category-buttons">
        <EnsuiteBedrooms onSelectCategory={() => onSelectCategory('Ensuite Bedrooms')} />
        <GroupRooms onSelectCategory={() => onSelectCategory('Group Rooms')} />
        <Hostels onSelectCategory={() => onSelectCategory('Hostels')} />
      </div>
    </div>
  );
};

export default RoomCategories;
