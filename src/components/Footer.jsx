// src/components/Footer.jsx
import React from 'react';
import {
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaPaw,
  FaLock
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#277DA1] text-white py-6 mt-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-6">
        
        {/* Left Section */}
        <div>
          <h4 className="text-xl font-semibold flex items-center justify-center md:justify-start gap-2">
            <FaPaw className="inline-block" />
            Catapalooza, Inc.
          </h4>
          <p className="text-sm">Orlando, FL 32826</p>
          <p className="text-sm">catapaloozatnr@gmail.com</p>
          <p className="text-sm mt-2 italic">
            PetSmart Adoption Events every Sat–Sun from 12–3 at Waterford Lakes Store
          </p>
        </div>

        {/* Right Section */}
        <div className="flex space-x-6 text-xl items-end relative justify-center md:justify-end">
          <a
            href="https://www.instagram.com/catapaloozatnr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-[#E5F3FB] transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/catapaloozatnr/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-[#E5F3FB] transition"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.tiktok.com/@catapaloozatnr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="hover:text-[#E5F3FB] transition"
          >
            <FaTiktok />
          </a>

          {/* Lock Icon with Tooltip */}
          <div className="relative group">
            <a
              href="/login"
              aria-label="Admin Login"
              className="hover:text-white transition"
            >
              <FaLock className="transition duration-300 group-hover:drop-shadow-[0_0_6px_white]" />
            </a>
            <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-white text-[#1D3557] px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Admin
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;