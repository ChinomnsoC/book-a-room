import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RoomCategories from './components/room-categories/RoomCategories';
import RoomListings from './components/room-listings/RoomListings';


const App: React.FC = () => {
  return (
      <Router>
          <div className="App">
              <h1>Room Booking App</h1>
              <Routes>
                  <Route path="/" element={<RoomCategories />} />
                  <Route path="/rooms/:category" element={<RoomListings />} />
              </Routes>
          </div>
      </Router>
  );
};

export default App;
