import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Homepage'; // Ensure the file name is capitalized
import Dessert from './Dessert'; // Import Dessert page
import Breakfast from './Breakfast'; // Import Breakfast page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/dessert" element={<Dessert />} />
        <Route path="/breakfast" element={<Breakfast />} />
        {/* Define routes for other pages */}
      </Routes>
    </Router>
  );
}

export default App;
