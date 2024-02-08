import React from 'react';

interface HostelsProps {
  onSelectCategory: () => void;
}

const Hostels: React.FC<HostelsProps> = ({ onSelectCategory }) => {
  return (
    <button onClick={onSelectCategory} className="category-button">
      Ensuite Bedrooms
    </button>
  );
};

export default Hostels;