// src/components/Events.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { db } from '../firebase';
import { collection, getDocs, query, where, orderBy, Timestamp } from 'firebase/firestore';
import { motion } from 'framer-motion';

const Events = () => {
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  useEffect(() => {
    const fetchThisWeeksEvents = async () => {
      const today = new Date();
      const endOfWeek = new Date();
      const day = today.getDay();
      const daysUntilSunday = 7 - day;
      endOfWeek.setDate(today.getDate() + daysUntilSunday);

      const q = query(
        collection(db, 'Events'),
        where('date', '>=', Timestamp.fromDate(today)),
        where('date', '<=', Timestamp.fromDate(endOfWeek)),
        orderBy('date')
      );

      const snapshot = await getDocs(q);
      const events = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));

      setUpcomingEvents(events);
    };

    fetchThisWeeksEvents();
  }, []);

  return (
    <div className="min-h-screen px-6 pt-28 pb-24 bg-gradient-to-b from-[#f9fbfc] to-[#e3ecf3] text-[#1D3557]">
      <div className="text-center mb-12">
        <FaCalendarAlt className="text-4xl text-[#277DA1] mx-auto mb-4 animate-bounce" />
        <h1 className="text-4xl font-extrabold tracking-tight">Our Events</h1>
        <p className="text-lg mt-2 max-w-2xl mx-auto text-opacity-80 italic">
          Every Catapalooza event helps us rescue, heal, and rehome abandoned cats in Central Florida.
          From Spirit Nights and Craft Fairs to Adoption Pop-Ups, our events build community and save lives.
        </p>
      </div>

      <div className="text-center mb-10">
        <h2 className="text-2xl font-semibold mb-6">This Week's Highlights</h2>
        {upcomingEvents.length === 0 ? (
          <p className="text-sm text-gray-600">No events scheduled this week — check back soon!</p>
        ) : (
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white border-l-4 border-[#277DA1] rounded-xl shadow p-6 text-left hover:shadow-xl hover:scale-[1.01] transition-transform duration-300"
              >
                <p className="text-xs bg-[#dff3ff] text-[#277DA1] px-3 py-1 rounded-full w-fit mb-2 font-semibold">
                  {new Date(event.date.seconds * 1000).toDateString()}
                </p>
                <h3 className="text-lg font-bold mb-2 text-[#1D3557] hover:text-[#E76F51] transition-colors">
                  {event.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                  <FaMapMarkerAlt className="text-[#F4A261]" />
                  <span>{event.location}</span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {event.description}
                </p>
              </motion.div>
            ))}
          </div>
        )}
        <Link
          to="/events/calendar"
          className="inline-block mt-10 px-6 py-3 bg-[#277DA1] text-white rounded-lg font-semibold hover:bg-[#1D3557] transition-all shadow hover:shadow-lg"
        >
          View Full Calendar
        </Link>
      </div>
    </div>
  );
};

export default Events;
