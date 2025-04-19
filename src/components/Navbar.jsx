// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = ['about', 'events', 'help', 'contact', 'cats']; // Added 'cats'

  return (
    <nav
      className={`bg-white px-6 py-4 fixed w-full z-50 transition-shadow ${
        isScrolled ? 'shadow-md' : ''
      } flex justify-between items-center`}
    >
      <Link
        to="/"
        className="text-2xl font-bold text-orange-500 hover:scale-105 transition-transform duration-300"
      >
        Catapalooza
      </Link>

      <ul className="hidden md:flex gap-6 text-gray-700 font-medium items-center">
        {navItems.map((item) => (
          <li key={item}>
            <Link
              to={`/${item === 'cats' ? 'cats' : item}`}
              className={`relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-orange-500 after:transition-all after:duration-300 hover:after:w-full ${
                item === 'cats'
                  ? 'bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-600 transition after:hidden'
                  : 'hover:text-orange-500'
              }`}
            >
              {item === 'help'
                ? 'How to Help'
                : item === 'cats'
                ? 'Adopt'
                : item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </li>
        ))}
      </ul>

      <button className="md:hidden text-gray-700 focus:outline-none">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;