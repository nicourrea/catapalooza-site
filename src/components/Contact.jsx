// src/components/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-20 text-gray-800">
      <h1 className="text-4xl font-bold mb-4 text-center text-[#1D3557]">Get in Touch</h1>
      <p className="text-lg mb-8 text-center">
        Have questions about adoption, fostering, or volunteering? We’d love to hear from you!
        You can reach us anytime at{' '}
        <a href="mailto:catapaloozatnr@gmail.com" className="text-[#277DA1] font-medium underline">
          catapaloozatnr@gmail.com
        </a>.
      </p>

      <form className="space-y-6 bg-white p-6 rounded-lg shadow">
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