import React from 'react';

interface EnsuiteBedroomsProps {
  onSelectCategory: () => void;
}

const EnsuiteBedrooms: React.FC<EnsuiteBedroomsProps> = ({ onSelectCategory }) => {
  return (
    <button onClick={onSelectCategory} className="category-button">
      Ensuite Bedrooms
    </button>
  );
};

export default EnsuiteBedrooms;