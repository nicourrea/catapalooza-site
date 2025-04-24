import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs, query, orderBy, where, Timestamp } from 'firebase/firestore';
import { motion, AnimatePresence } from 'framer-motion';

const EventsCalendar = () => {
  const [eventsByMonth, setEventsByMonth] = useState({});
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [platform, setPlatform] = useState('other');

  useEffect(() => {
    const ua = navigator.userAgent || navigator.vendor || window.opera;
    if (/android/i.test(ua)) {
      setPlatform('android');
    } else if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) {
      setPlatform('ios');
    }
  }, []);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const now = new Date();
        const startOfThisMonth = new Date(now.getFullYear(), now.getMonth(), 1);
        const startOfMonthAfterNext = new Date(now.getFullYear(), now.getMonth() + 3, 1);

        const q = query(
          collection(db, 'Events'),
          where('date', '>=', Timestamp.fromDate(startOfThisMonth)),
          where('date', '<', Timestamp.fromDate(startOfMonthAfterNext)),
          orderBy('date')
        );

        const snapshot = await getDocs(q);
        const grouped = {};

        snapshot.docs.forEach((doc) => {
          const data = doc.data();
          const eventMonth = new Date(data.date.seconds * 1000).toLocaleString('default', { month: 'long', year: 'numeric' });
          if (!grouped[eventMonth]) grouped[eventMonth] = [];
          grouped[eventMonth].push({ id: doc.id, ...data });
        });

        setEventsByMonth(grouped);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  const generateCalendarLinks = (event) => {
    const start = new Date(event.date.seconds * 1000);
    const end = new Date(start.getTime() + 2 * 60 * 60 * 1000);
    const format = (date) => date.toISOString().replace(/-|:|\.\d+/g, '');

    const googleLink = `https://calendar.google.com/calendar/r/eventedit?text=${encodeURIComponent(
      event.title
    )}&dates=${format(start)}/${format(end)}&details=${encodeURIComponent(
      event.description
    )}&location=${encodeURIComponent(event.location)}`;

    const icsContent = `\nBEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nSUMMARY:${event.title}\nDTSTART:${format(start)}\nDTEND:${format(end)}\nDESCRIPTION:${event.description}\nLOCATION:${event.location}\nEND:VEVENT\nEND:VCALENDAR\n`;

    const blob = new Blob([icsContent.trim()], { type: 'text/calendar' });
    const icsUrl = URL.createObjectURL(blob);

    return { googleLink, icsUrl };
  };

  return (
    <div className="min-h-screen px-6 pt-28 pb-24 bg-white text-[#1D3557]">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12"
      >
        Monthly Events
      </motion.h1>

      {Object.keys(eventsByMonth).length === 0 ? (
        <p className="text-center text-lg">No events this month or next.</p>
      ) : (
        Object.entries(eventsByMonth).map(([month, events]) => (
          <div key={month} className="mb-12 max-w-3xl mx-auto">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.4 }}
              className="text-2xl font-semibold mb-4"
            >
              {month}
            </motion.h2>
            <div className="space-y-6">
              {events.map((event) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  onClick={() => {
                    setSelectedEvent(event);
                    setShowModal(true);
                  }}
                  className="cursor-pointer p-6 bg-[#f9fbfc] rounded-xl shadow hover:shadow-md transition"
                >
                  <h3 className="text-xl font-semibold mb-1">{event.title}</h3>
                  <p className="text-sm text-gray-600 mb-1">
                    {new Date(event.date.seconds * 1000).toLocaleDateString()} — {event.time}
                  </p>
                  <p className="text-base mb-1">📍 {event.location}</p>
                  <p>{event.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        ))
      )}

      <AnimatePresence>
        {showModal && selectedEvent && (() => {
          const { googleLink, icsUrl } = generateCalendarLinks(selectedEvent);
          return (
            <motion.div 
              className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="bg-white p-6 rounded-lg shadow-xl text-center max-w-sm"
              >
                <h3 className="text-xl font-semibold mb-4">Add to Calendar?</h3>
                <p className="mb-6 font-medium">{selectedEvent.title}</p>
                <div className="flex flex-col gap-3">
                  {platform === 'android' ? (
                    <>
                      <a
                        href={googleLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#277DA1] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#1D3557] transition"
                      >
                        📅 Add to Google Calendar
                      </a>
                      <a
                        href={icsUrl}
                        download={`${selectedEvent.title}.ics`}
                        className="bg-[#277DA1] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#1D3557] transition"
                      >
                        🗓️ Download for Apple Calendar
                      </a>
                    </>
                  ) : (
                    <>
                      <a
                        href={icsUrl}
                        download={`${selectedEvent.title}.ics`}
                        className="bg-[#277DA1] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#1D3557] transition"
                      >
                        🗓️ Download for Apple Calendar
                      </a>
                      <a
                        href={googleLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#277DA1] text-white font-semibold px-4 py-2 rounded-lg shadow hover:bg-[#1D3557] transition"
                      >
                        📅 Add to Google Calendar
                      </a>
                    </>
                  )}
                  <button
                    onClick={() => setShowModal(false)}
                    className="text-sm mt-2 text-[#277DA1] hover:underline"
                  >
                    Cancel
                  </button>
                </div>
              </motion.div>
            </motion.div>
          );
        })()}
      </AnimatePresence>
    </div>
  );
};

export default EventsCalendar;