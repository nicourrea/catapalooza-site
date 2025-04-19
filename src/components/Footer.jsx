// src/components/Footer.jsx
import React from 'react';
import { FaInstagram, FaFacebook, FaTiktok, FaPaw } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-orange-500 text-white py-6 mt-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <div className="mb-4 md:mb-0">
          <h4 className="text-xl font-semibold flex items-center gap-2">
            <FaPaw className="inline-block" />
            Catapalooza, Inc.
          </h4>
          <p className="text-sm">Orlando, FL 32826</p>
          <p className="text-sm">catapaloozatnr@gmail.com</p>
          <p className="text-sm mt-2 italic">
            PetSmart Adoption Events every Sat–Sun from 12–3 at Waterford Lakes Store
          </p>
        </div>
        <div className="flex space-x-6 text-xl">
          <a
            href="https://www.instagram.com/catapaloozatnr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-gray-200"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/catapaloozatnr/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-gray-200"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.tiktok.com/@catapaloozatnr"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="hover:text-gray-200"
          >
            <FaTiktok />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;