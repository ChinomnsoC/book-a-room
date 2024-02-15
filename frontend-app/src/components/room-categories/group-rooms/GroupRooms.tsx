import React from 'react';

interface GroupRoomsProps {
  onSelectCategory: () => void;
}

const GroupRooms: React.FC<GroupRoomsProps> = ({ onSelectCategory }) => {
  return (
    <button onClick={onSelectCategory} className="category-button">
      Group Rooms
    </button>
  );
};

export default GroupRooms;