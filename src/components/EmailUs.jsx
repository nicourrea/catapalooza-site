import React from 'react';
import { FiMail } from 'react-icons/fi';

const Email = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24 text-gray-800">
      <h1 className="text-4xl font-bold text-center mb-8 text-[#1D3557]">Get in Touch</h1>

      <div className="bg-[#f0f7fb] p-8 rounded-xl shadow-md text-center">
        <p className="text-lg text-[#1D3557] mb-6">
          Have a question about adoptions, donations, or volunteering? We’d love to hear from you!
        </p>

        <a
          href="mailto:catapaloozatnr@gmail.com"
          className="inline-flex items-center gap-3 bg-[#277DA1] hover:bg-[#1D3557] text-white px-6 py-3 rounded-lg font-semibold transition duration-300"
        >
          <FiMail className="text-2xl" />
          Email catapaloozatnr@gmail.com
        </a>

        <p className="mt-6 text-sm text-gray-600">
          We typically respond within 24–48 hours. For urgent rescue situations, please include as much detail as possible.
        </p>
      </div>
    </div>
  );
};

export default Email;