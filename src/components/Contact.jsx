import React from 'react';
import { FaEnvelope, FaQuestionCircle, FaInstagram, FaFacebook, FaTiktok } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 pt-24 pb-20 text-gray-800">
      <h1 className="text-4xl font-bold mb-12 text-center text-[#1D3557]">Get in Touch</h1>

      {/* Summary Cards */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 text-center mb-16">
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

      {/* Contact Form */}
      <form className="max-w-3xl mx-auto space-y-6 bg-white p-6 rounded-lg shadow">
        <div>
          <label htmlFor="name" className="block font-medium text-sm mb-1 text-[#1D3557]">Name</label>
          <input
            type="text"
            id="name"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3C8DBC]"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block font-medium text-sm mb-1 text-[#1D3557]">Email</label>
          <input
            type="email"
            id="email"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3C8DBC]"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label htmlFor="message" className="block font-medium text-sm mb-1 text-[#1D3557]">Message</label>
          <textarea
            id="message"
            rows="4"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3C8DBC]"
            placeholder="Write your message here..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-[#277DA1] text-white px-6 py-2 rounded hover:bg-[#1D3557] transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;