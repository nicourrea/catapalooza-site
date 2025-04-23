// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import catLogo from '../assets/CatLogo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    {
      label: 'About',
      path: '/about',
      dropdown: [
        { label: 'Our Team', path: '/about/team' },
        { label: 'Our Mission', path: '/about/mission' },
        { label: 'Areas We Serve', path: '/about/areas' },
      ],
    },
    {
      label: 'Events',
      path: '/events',
      dropdown: [
        { label: 'Upcoming Events', path: '/events' },
        { label: 'Past Highlights', path: '/events/highlights' },
        { label: 'Team Up With Us', path: '/events/collab' },
      ],
    },
    {
      label: 'How to Help',
      path: '/help',
      dropdown: [
        { label: 'Donate', path: '/help/donate' },
        { label: 'Volunteer', path: '/help/volunteer' },
        { label: 'Foster', path: '/help/foster' },
      ],
    },
    {
      label: 'Contact',
      path: '/contact',
      dropdown: [
        { label: 'Email Us', path: '/contact/email' },
        { label: 'Social Media', path: '/contact/social' },
        { label: 'FAQs', path: '/contact/faqs' },
      ],
    },
    {
      label: 'Adopt',
      path: '/cats',
    },
  ];

  return (
    <nav
      className={`bg-white px-6 py-4 fixed w-full z-50 transition-shadow ${
        isScrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="flex justify-between items-center">
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-bold text-[#3C8DBC] hover:scale-105 transition-transform duration-300"
        >
          Catapalooza
          <img src={catLogo} alt="Catapalooza Logo" className="h-8 w-8 object-contain" />
        </Link>

        <ul className="hidden md:flex gap-6 text-[#1D3557] font-medium items-center relative">
          {navItems.map((item, index) => (
            <li
              key={item.label}
              className="relative group"
              onMouseEnter={() => setDropdownOpen(index)}
              onMouseLeave={() => setDropdownOpen(null)}
            >
              <Link
                to={item.path}
                className={`relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#3C8DBC] after:transition-all after:duration-300 hover:after:w-full ${
                  item.label === 'Adopt'
                    ? 'bg-[#3C8DBC] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#1D3557] transition after:hidden'
                    : 'hover:text-[#3C8DBC]'
                }`}
              >
                {item.label}
              </Link>
              {item.dropdown && dropdownOpen === index && (
                <ul className="absolute top-full left-0 mt-2 bg-white border rounded shadow-lg py-2 w-48 z-50">
                  {item.dropdown.map((dropItem) => (
                    <li key={dropItem.path}>
                      <Link
                        to={dropItem.path}
                        className="block px-4 py-2 text-sm text-[#1D3557] hover:bg-[#f0f0f0]"
                      >
                        {dropItem.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-[#1D3557] focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <ul className="md:hidden mt-4 space-y-3 text-[#1D3557] font-medium">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={`block px-4 py-2 ${
                  item.label === 'Adopt'
                    ? 'bg-[#3C8DBC] text-white rounded-lg font-semibold hover:bg-[#1D3557] transition'
                    : 'hover:text-[#3C8DBC]'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;