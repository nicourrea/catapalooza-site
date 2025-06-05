import React from 'react';
import { FaEnvelope, FaQuestionCircle, FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ContactImage from '../assets/Contact.png'; // 👈 Make sure the image is in src/assets/

const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 pt-24 pb-20 text-gray-800">
      <h1 className="text-4xl font-bold mb-12 text-center text-[#1D3557]">Get in Touch</h1>

      {/* New Cat Contact Image */}
      <div className="mb-12">
        <img
          src={ContactImage}
          alt="Contact Us Cats"
          className="rounded-xl shadow-md w-full object-cover"
        />
      </div>

      {/* Summary Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-center">
        {/* Email Us */}
        <div className="bg-white shadow-md p-6 rounded-xl hover:shadow-xl transition duration-300 transform hover:-translate-y-1">
          <FaEnvelope className="text-4xl text-[#277DA1] mb-4 mx-auto" />
          <h2 className="text-xl font-bold mb-2 text-[#277DA1]">Email Us</h2>
          <p className="text-sm mb-2">Reach out anytime with questions or ideas.</p>
          <a href="mailto:catapaloozatnr@gmail.com" className="text-[#277DA1] font-semibold hover:underline text-sm">
            catapaloozatnr@gmail.com
          </a>
        </div>

        {/* Social Media */}
        <Link
          to="/contact/social"
          className="bg-white shadow-md p-6 rounded-xl hover:shadow-xl transition duration-300 transform hover:-translate-y-1 block"
        >
          <div className="flex justify-center gap-4 text-2xl text-[#277DA1] mb-4">
            <FaInstagram />
            <FaFacebook />
            <FaTiktok />
          </div>
          <h2 className="text-xl font-bold mb-2 text-[#277DA1]">Social Media</h2>
          <p className="text-sm mb-2">Follow us to see cats, events, and updates!</p>
          <span className="text-[#277DA1] font-semibold hover:underline text-sm">View Social Links</span>
        </Link>

        {/* FAQs */}
        <Link
          to="/contact/faqs"
          className="bg-white shadow-md p-6 rounded-xl hover:shadow-xl transition duration-300 transform hover:-translate-y-1 block"
        >
          <FaQuestionCircle className="text-4xl text-[#277DA1] mb-4 mx-auto" />
          <h2 className="text-xl font-bold mb-2 text-[#277DA1]">FAQs</h2>
          <p className="text-sm mb-2">Quick answers to common questions.</p>
          <span className="text-[#277DA1] font-semibold hover:underline text-sm">View FAQs</span>
        </Link>
      </div>
    </div>
  );
};

export default Contact;