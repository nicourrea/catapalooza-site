// src/components/SocialMedia.jsx
import React from 'react';
import { FaInstagram, FaFacebookF, FaTiktok, FaPaw, FaLink } from 'react-icons/fa';
import { RiExternalLinkLine } from 'react-icons/ri';

const SocialMedia = () => {
  const links = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/catapaloozatnr',
      icon: <FaInstagram className="text-pink-500 text-3xl" />,
      handle: '@catapaloozatnr',
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/catapaloozatnr/',
      icon: <FaFacebookF className="text-blue-600 text-3xl" />,
      handle: 'facebook.com/catapaloozatnr',
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@catapaloozatnr',
      icon: <FaTiktok className="text-black text-3xl" />,
      handle: '@catapaloozatnr',
    },
    {
      name: 'Petfinder',
      url: 'https://www.petfinder.com/member/us/fl/orlando/catapalooza-inc-fl1522/',
      icon: <FaPaw className="text-[#277DA1] text-3xl" />,
      handle: 'View Our Adoptable Cats',
    },
    {
      name: 'Linq App',
      url: 'https://linqapp.com/catapaloozaTNR',
      icon: <FaLink className="text-[#1D3557] text-3xl" />,
      handle: 'All links in one place',
    },
    {
      name: 'Wagtopia',
      url: 'https://www.wagtopia.com/search/org?id=1538306&page=1&sort=default&name=Catapalooza,+Inc',
      icon: <RiExternalLinkLine className="text-[#1D3557] text-3xl" />,
      handle: 'View adoptable cats on Wagtopia',
    },
  ];

  return (
    <div className="max-w-5xl mx-auto pt-32 px-6 text-[#1D3557]">
      <h1 className="text-4xl font-bold mb-6 text-center">Follow Us Online</h1>
      <p className="text-lg mb-10 text-center text-[#1D3557]">
        Stay in the loop with our rescue work, adoption events, and adorable cat updates!
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 text-center">
        {links.map(({ name, url, icon, handle }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#f0f7fb] rounded-xl shadow hover:shadow-lg transition p-6 flex flex-col items-center justify-center"
          >
            {icon}
            <h2 className="text-xl font-semibold mt-3 mb-1 text-[#1D3557]">{name}</h2>
            <p className="text-sm text-gray-600">{handle}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialMedia;