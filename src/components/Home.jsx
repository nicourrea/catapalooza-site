// src/components/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import catPhoto from '../assets/IMG_7350.jpg';
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const Home = () => {
  return (
    <div className="text-gray-800">
      {/* Hero Section */}
      <motion.section
        className="bg-yellow-100 py-20 px-4 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Supporting Cats. Creating Community.
        </h1>
        <p className="text-lg md:text-xl max-w-xl mx-auto mb-6">
          Catapalooza is a nonprofit dedicated to rescuing, fostering, and finding forever homes for cats in need.
        </p>
        <div className="flex justify-center gap-4">
          <Link to="/help">
            <button className="bg-orange-500 text-white py-2 px-6 rounded-xl hover:bg-orange-600 transition">
              Donate
            </button>
          </Link>
          <Link to="/about">
            <button className="border-2 border-orange-500 text-orange-500 py-2 px-6 rounded-xl hover:bg-orange-100 transition">
              Learn More
            </button>
          </Link>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        className="bg-gray-50 py-16 px-6 max-w-4xl mx-auto text-center rounded-xl shadow-sm"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="text-3xl font-bold mb-2">About Catapalooza</h2>
        <div className="w-20 h-1 bg-orange-400 mx-auto mb-6 rounded"></div>
        <p className="text-lg mb-8">
          We're a group of passionate volunteers committed to improving the lives of stray and abandoned cats. Our mission is to create a loving, safe space for every feline we help.
        </p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-block bg-white p-2 rounded-2xl shadow-lg"
        >
          <img
            src={catPhoto}
            alt="Cat rescued by Catapalooza"
            className="rounded-xl w-64 h-auto object-cover"
            loading="lazy"
          />
        </motion.div>
      </motion.section>

      {/* Events Section */}
      <motion.section
        className="bg-gray-100 py-16 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Events</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">Adoption Day</h3>
              <p className="text-sm">
                Join us this Saturday for our monthly adoption drive at the local park!
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">Fundraiser Gala</h3>
              <p className="text-sm">
                Support Catapalooza with a night of dinner, raffles, and live music. RSVP now!
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold mb-2">Volunteer Training</h3>
              <p className="text-sm">
                Want to get involved? Come learn how to help out with our rescue missions.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* How to Help Section */}
      <motion.section
        className="py-16 px-6 max-w-5xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 className="text-3xl font-bold mb-8 text-center">How You Can Help</h2>
        <div className="grid gap-6 md:grid-cols-3 text-center">
          <div>
            <h3 className="text-xl font-bold mb-2">Donate</h3>
            <p className="text-sm">Every dollar goes toward food, shelter, and medical care.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Volunteer</h3>
            <p className="text-sm">Join our network of passionate cat lovers.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Foster</h3>
            <p className="text-sm">Give a cat a temporary home and lots of love.</p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;