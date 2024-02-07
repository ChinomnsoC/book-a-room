import React, { useState } from 'react';
import RoomCategories from './components/RoomCategories';

const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="App">
      <h1>Room Booking App</h1>
      <RoomCategories onSelectCategory={handleSelectCategory} />
      {selectedCategory && (
        <div>
          <h2>Selected Category: {selectedCategory}</h2>
          {/* Render rooms for the selected category */}
        </div>
      )}
    </div>
  );
};

export default App;
