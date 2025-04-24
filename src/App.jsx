// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Events from './components/Events'; // ✅ Overview Page
import EventsCalendar from './components/EventsCalender'; // ✅ Calendar Page
import HowToHelp from './components/HowToHelp';
import Contact from './components/Contact';
import Cats from './components/Cats';
import Upload from './Upload'; // ✅ Unified Upload Page (Cats + Events)
import Footer from './components/Footer';
import FAQs from './components/FAQs';
import SocialMedia from './components/SocialMedia';
import Donate from './components/Donate';
import Foster from './components/Foster';
import Volunteer from './components/Volunteer';
import EmailUs from './components/EmailUs';
import TeamUpWithUs from './components/TeamUpWithUs';
import PastHighlights from './components/PastHighlights';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/calendar" element={<EventsCalendar />} />
        <Route path="/events/team-up" element={<TeamUpWithUs />} />
        <Route path="/events/highlights" element={<PastHighlights />} />
        <Route path="/help" element={<HowToHelp />} />
        <Route path="/help/donate" element={<Donate />} />
        <Route path="/help/foster" element={<Foster />} />
        <Route path="/help/volunteer" element={<Volunteer />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/contact/faqs" element={<FAQs />} />
        <Route path="/contact/social" element={<SocialMedia />} />
        <Route path="/contact/email" element={<EmailUs />} />
        <Route path="/cats" element={<Cats />} />
        <Route path="/upload" element={<Upload />} /> {/* ✅ Toggle between Cat + Event uploads */}
      </Routes>
      <Footer />
    </Router>
  );
}