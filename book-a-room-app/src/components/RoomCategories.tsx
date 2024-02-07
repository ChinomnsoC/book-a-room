import React from 'react';

interface RoomCategoriesProps {
  onSelectCategory: (category: string) => void;
}

const RoomCategories: React.FC<RoomCategoriesProps> = ({ onSelectCategory }) => {
  const handleCategoryClick = (category: string) => {
    onSelectCategory(category);
  };

  return (
    <div className="room-categories">
      <h2>Room Categories</h2>
      <div className="category-buttons">
        <button onClick={() => handleCategoryClick('Ensuite Bedrooms')} className="category-button">
          Ensuite Bedrooms
        </button>
        <button onClick={() => handleCategoryClick('Group Rooms')} className="category-button">
          Group Rooms
        </button>
        <button onClick={() => handleCategoryClick('Hostels')} className="category-button">
          Hostels
        </button>
      </div>
    </div>
  );
};

export default RoomCategories;
