import React from 'react';
import { motion } from 'framer-motion';
import { FaUtensils, FaStore, FaSeedling, FaHandshake } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Craft1 from '../assets/Craft1.jpeg';
import Craft2 from '../assets/Craft2.jpeg';
import Craft3 from '../assets/Craft3.jpeg';
import Portillos from '../assets/Portillos.jpeg';
import TJPeople from '../assets/TJPeople.jpeg';
import TJFriend from '../assets/TJFriend.jpeg';
import Kendra1 from '../assets/Kendra1.jpeg';
import Kendra2 from '../assets/Kendra2.jpeg';
import Kendra3 from '../assets/Kendra3.jpeg';

const fadeVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' }
  }
};

const imageClass =
  'w-full h-[250px] object-cover rounded-xl shadow transition-transform duration-300 hover:scale-105';

const PastHighlights = () => {
  return (
    <div className="min-h-screen px-6 pt-28 pb-24 bg-[#f9fbfc] text-[#1D3557]">
      <motion.h1
        className="text-4xl font-bold text-center mb-12"
        variants={fadeVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Past Highlights
      </motion.h1>

      {/* Section 1: Spirit Nights */}
      <motion.section
        className="mb-20 text-center"
        variants={fadeVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <FaUtensils className="text-3xl mx-auto mb-4 text-[#277DA1]" />
        <h2 className="text-2xl font-semibold mb-2">Spirit Nights at Local Favorites</h2>
        <p className="max-w-3xl mx-auto mb-8">
          From hot dogs to tacos, our community shows up to support the cats! We've hosted fundraising nights at Portillo’s, Chipotle, California Pizza Kitchen, and Tijuana Flats.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <img src={TJPeople} alt="Tijuana Flats Guests" className={imageClass} />
          <img src={TJFriend} alt="Catapalooza Volunteers" className={imageClass} />
          <img src={Portillos} alt="Portillos Flyer" className={imageClass} />
        </div>
      </motion.section>

      {/* Section 2: Kendra Scott */}
      <motion.section
        className="mb-20 text-center"
        variants={fadeVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <FaStore className="text-3xl mx-auto mb-4 text-[#277DA1]" />
        <h2 className="text-2xl font-semibold mb-2">Kendra Scott Spirit Nights</h2>
        <p className="max-w-3xl mx-auto mb-8">
          Cat ears, sparkles, and savings — our Kendra Scott partnership brings glam to giving. These events are fan favorites and a big help for our fundraising goals.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <img src={Kendra1} alt="Kendra Setup 1" className={imageClass} />
          <img src={Kendra2} alt="Kendra Setup 2" className={imageClass} />
          <img src={Kendra3} alt="Kendra Setup 3" className={imageClass} />
        </div>
      </motion.section>

      {/* Section 3: Community Booths */}
      <motion.section
        className="text-center"
        variants={fadeVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <FaSeedling className="text-3xl mx-auto mb-4 text-[#277DA1]" />
        <h2 className="text-2xl font-semibold mb-2">Community Booths & Markets</h2>
        <p className="max-w-3xl mx-auto mb-8">
          We love connecting with the community at craft fairs and farmers markets in Avalon Park and beyond. Our booth is always full of charm, merch, and friendly faces.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <img src={Craft1} alt="Craft Booth 1" className={imageClass} />
          <img src={Craft2} alt="Craft Booth 2" className={imageClass} />
          <img src={Craft3} alt="Craft Booth 3" className={imageClass} />
        </div>
      </motion.section>

      {/* Section 4: Call to Action */}
      <motion.section
        className="text-center mt-24"
        variants={fadeVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <FaHandshake className="text-4xl text-[#277DA1] mx-auto mb-4" />
        <h2 className="text-2xl font-semibold mb-4">Want to Sponsor or Work With Us?</h2>
        <p className="max-w-xl mx-auto mb-6">
          Whether you’re a business or an individual looking to support our mission, we’d love to team up! Help us make future events even more impactful.
        </p>
        <Link
          to="/events/team-up"
          className="inline-block px-6 py-3 bg-[#277DA1] text-white rounded-lg font-semibold hover:bg-[#1D3557] transition"
        >
          Team Up With Us
        </Link>
      </motion.section>
    </div>
  );
};

export default PastHighlights;
