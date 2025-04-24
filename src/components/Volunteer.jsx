// src/components/Volunteer.jsx
import React from 'react';
import { FaHandsHelping, FaEnvelopeOpenText, FaPaw } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Volunteer = () => {
  return (
    <div className="min-h-screen px-6 pt-36 pb-24 bg-[#f9fbfc] text-[#1D3557]">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-10 text-center">Volunteer With Us</h1>

        <div className="bg-[#f0f7fb] p-6 rounded-2xl shadow-md mb-10">
          <h2 className="text-2xl font-bold flex items-center gap-3 mb-4">
            <FaHandsHelping /> High School Volunteer Hours
          </h2>
          <p className="text-lg">
            If you’re a high school student age 16 or older and need volunteer hours, you can help us at our weekend adoption events! These take place every
            <strong> Saturday and Sunday from 12–3 PM</strong> at the PetSmart in Waterford Lakes.
          </p>
          <p className="text-lg mt-4">Just show up and let a team member know you're interested in volunteering!</p>
        </div>

        <div className="bg-[#f0f7fb] p-6 rounded-2xl shadow-md mb-10">
          <h2 className="text-2xl font-bold flex items-center gap-3 mb-4">
            <FaEnvelopeOpenText /> Other Volunteer Opportunities
          </h2>
          <p className="text-lg mb-4">
            If you're interested in fostering, outreach, social media, or other ways to help — just shoot us an email and let us know how you'd like to get involved!
          </p>
          <div className="text-center">
            <a
              href="mailto:catapaloozatnr@gmail.com"
              className="inline-block bg-[#1D3557] text-white font-semibold py-2 px-5 rounded-xl hover:bg-[#16324c] transition"
            >
              Email Us to Volunteer
            </a>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg">
            <FaPaw className="inline mr-2" />
            Interested in <strong>fostering</strong> instead?{' '}
            <Link to="/help/foster" className="text-[#457B9D] underline hover:text-[#1D3557] transition">
              Click here to learn more.
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Volunteer;