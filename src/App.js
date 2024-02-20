import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'; // Correcting the path to Home.js
import Collection from './collection'; 
import Contact from './contact';


function App() {
  return (
    
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
       <Route path="/collection" element={<Collection />} />
       <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
