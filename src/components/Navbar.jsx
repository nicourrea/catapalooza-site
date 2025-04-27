// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import catLogo from '../assets/CatLogo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();

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
        { label: 'Who We Are', path: '/about/Who' },
        { label: 'Our Mission', path: '/about/mission' },
        { label: 'Areas We Serve', path: '/about/areas' },
      ],
    },
    {
      label: 'Events',
      path: '/events',
      dropdown: [
        { label: 'Events Calendar', path: '/events/calendar' },
        { label: 'Past Highlights', path: '/events/highlights' },
        { label: 'Team Up With Us', path: '/events/team-up' },
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

  const toggleDropdown = (label) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <>
      {/* Navbar */}
      <nav className={`bg-white px-6 py-3 fixed w-full z-50 transition-shadow ${isScrolled ? 'shadow-md' : ''}`}>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-[1.6rem] font-bold text-[#3C8DBC] hover:scale-105 transition-transform duration-300">
            Catapalooza
            <img src={catLogo} alt="Catapalooza Logo" className="h-8 w-8 object-contain" />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 text-[#1D3557] font-medium items-center relative">
            {navItems.map((item) => (
              <li key={item.label} className="relative group">
                <div className="flex items-center gap-1">
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
                  {item.dropdown && (
                    <button
                      type="button"
                      onClick={() => toggleDropdown(item.label)}
                      className="p-2 ml-1 rounded-full hover:bg-[#e5f3fb] transition"
                    >
                      <ChevronDown size={18} className={`transition-transform duration-300 ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                    </button>
                  )}
                </div>

                {/* Desktop Dropdown */}
                {item.dropdown && (
                  <ul className="absolute top-full left-0 mt-2 bg-white border rounded shadow-lg py-2 w-52 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform scale-95 group-hover:scale-100">
                    {item.dropdown.map((dropItem) => (
                      <li key={dropItem.path}>
                        <Link
                          to={dropItem.path}
                          className="block px-4 py-2 text-sm text-[#1D3557] hover:bg-[#e5f3fb] transition-colors duration-200"
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

          {/* Mobile Hamburger */}
          <button
            className="md:hidden relative w-8 h-8 focus:outline-none z-50"
            onClick={() => {
              setMenuOpen(!menuOpen);
              setOpenDropdown(null);
            }}
          >
            <div className="absolute top-1/2 left-1/2 w-6 h-0.5 bg-[#1D3557] rounded transition-all duration-300 origin-center transform -translate-x-1/2 -translate-y-2"
              style={{ transform: menuOpen ? 'translate(-50%, -50%) rotate(45deg)' : 'translate(-50%, -8px)' }}
            ></div>
            <div className="absolute top-1/2 left-1/2 w-6 h-0.5 bg-[#1D3557] rounded transition-all duration-300 origin-center transform"
              style={{ opacity: menuOpen ? 0 : 1, transform: 'translate(-50%, -50%)' }}
            ></div>
            <div className="absolute top-1/2 left-1/2 w-6 h-0.5 bg-[#1D3557] rounded transition-all duration-300 origin-center transform -translate-x-1/2 translate-y-2"
              style={{ transform: menuOpen ? 'translate(-50%, -50%) rotate(-45deg)' : 'translate(-50%, 8px)' }}
            ></div>
          </button>
        </div>
      </nav>

      {/* Dark Background */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          onClick={closeMenu}
        ></div>
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-16 left-0 w-full bg-white p-6 z-50 text-[#1D3557] font-medium transform transition-all duration-300 ease-out ${
          menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'
        }`}
      >
        <ul className="space-y-5">
          {navItems.map((item) => (
            <div key={item.label}>
              <li className="flex items-center justify-between px-4 py-3">
                <Link
                  to={item.path}
                  onClick={closeMenu}
                  className={`flex-1 text-lg ${
                    item.label === 'Adopt'
                      ? 'bg-[#3C8DBC] text-white rounded-lg font-semibold px-4 py-2 hover:bg-[#1D3557] transition'
                      : 'hover:text-[#3C8DBC]'
                  }`}
                >
                  {item.label}
                </Link>
                {item.dropdown && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleDropdown(item.label);
                    }}
                    className="p-3 ml-2 rounded-full hover:bg-[#e5f3fb] transition"
                  >
                    <ChevronDown size={22} className={`transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                  </button>
                )}
              </li>

              {/* Collapsible Dropdown */}
              {item.dropdown && (
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openDropdown === item.label ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <ul className="pl-10 mt-1 space-y-2">
                    {item.dropdown.map((dropItem) => (
                      <li key={dropItem.path}>
                        <Link
                          to={dropItem.path}
                          onClick={closeMenu}
                          className="block px-2 py-1 text-md text-[#1D3557] hover:text-[#3C8DBC]"
                        >
                          {dropItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;