import React from 'react';

interface HostelsProps {
  onSelectCategory: () => void;
}

const Hostels: React.FC<HostelsProps> = ({ onSelectCategory }) => {
  return (
    <button onClick={onSelectCategory} className="category-button">
      Hostels
    </button>
  );
};

export default Hostels;