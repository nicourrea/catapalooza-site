// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Events from './components/Events';
import HowToHelp from './components/HowToHelp';
import Contact from './components/Contact';
import Cats from './components/Cats';
import UploadCat from './UploadCat'; // ✅ Import UploadCat
import Footer from './components/Footer'; // ✅ Import Footer

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/help" element={<HowToHelp />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cats" element={<Cats />} />
        <Route path="/upload" element={<UploadCat />} /> {/* ✅ Add UploadCat route */}
      </Routes>
      <Footer /> {/* ✅ Add Footer below all routes */}
    </Router>
  );
}