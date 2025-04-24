// src/components/TeamUpWithUs.jsx
import React from 'react';
import { FaEnvelopeOpenText, FaHandshake } from 'react-icons/fa';

const TeamUpWithUs = () => {
  return (
    <div className="min-h-screen px-6 pt-36 pb-24 bg-[#f9fbfc] text-[#1D3557]">
      <div className="max-w-2xl mx-auto text-center">
        <FaHandshake className="text-5xl text-[#277DA1] mx-auto mb-6" />
        <h1 className="text-4xl font-bold mb-4">Team Up With Us</h1>
        <p className="text-lg mb-6">
          If you or your organization is interested in sponsoring a Catapalooza event,
          we would be incredibly grateful for your support. Together, we can save more lives
          and create unforgettable adoption experiences.
        </p>
        <p className="text-lg mb-8">
          Please reach out to us at{' '}
          <a
            href="mailto:catapaloozatnr@gmail.com"
            className="text-[#277DA1] font-semibold underline"
          >
            catapaloozatnr@gmail.com
          </a>{' '}
          and let us know how you'd like to collaborate!
        </p>
        <FaEnvelopeOpenText className="text-3xl text-[#277DA1] mx-auto" />
      </div>
    </div>
  );
};

export default TeamUpWithUs;