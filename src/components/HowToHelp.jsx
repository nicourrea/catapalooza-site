import React from 'react';
import {
  FaHandHoldingHeart,
  FaHandsHelping,
  FaHome,
  FaCat,
  FaPaypal,
  FaMoneyBillWave,
  FaStoreAlt,
  FaAmazon,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HowToHelp = () => {
  return (
    <div className="text-gray-800 px-6 pt-24 pb-16 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-12 text-center text-[#1D3557]">How You Can Help</h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 text-center">
        {/* Donate (linked) */}
        <Link
          to="/help/donate"
          className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2 hover:scale-105"
        >
          <FaHandHoldingHeart className="text-4xl text-[#277DA1] mb-4 mx-auto" />
          <h2 className="text-xl font-bold mb-2 text-[#277DA1]">Donate</h2>
          <p className="text-sm mb-2">Every dollar goes toward food, shelter, and medical care.</p>
          <span className="text-[#277DA1] font-semibold hover:underline text-sm">Learn More</span>
        </Link>

        {/* Volunteer */}
        <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2 hover:scale-105">
          <FaHandsHelping className="text-4xl text-[#277DA1] mb-4 mx-auto" />
          <h2 className="text-xl font-bold mb-2 text-[#277DA1]">Volunteer</h2>
          <p className="text-sm mb-2">Join our network of passionate cat lovers.</p>
          <Link to="/help/volunteer" className="text-[#277DA1] font-semibold hover:underline text-sm">
            Learn More
          </Link>
        </div>

        {/* Foster */}
        <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2 hover:scale-105">
          <FaHome className="text-4xl text-[#277DA1] mb-4 mx-auto" />
          <h2 className="text-xl font-bold mb-2 text-[#277DA1]">Foster</h2>
          <p className="text-sm mb-2">Give a cat a temporary home and lots of love.</p>
          <Link to="/help/foster" className="text-[#277DA1] font-semibold hover:underline text-sm">
            Learn More
          </Link>
        </div>

        {/* Adopt */}
        <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2 hover:scale-105">
          <FaCat className="text-4xl text-[#277DA1] mb-4 mx-auto" />
          <h2 className="text-xl font-bold mb-2 text-[#277DA1]">Adopt</h2>
          <p className="text-sm mb-2">Click below to view our cats and start your adoption journey.</p>
          <Link to="/cats" className="text-[#277DA1] font-semibold hover:underline text-sm">
            Learn More
          </Link>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-20 mb-8 text-center text-[#1D3557]">Other Ways to Contribute</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 text-center">
        {/* PayPal */}
        <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2 hover:scale-105">
          <FaPaypal className="text-3xl text-[#277DA1] mb-3 mx-auto" />
          <h3 className="text-lg font-semibold mb-2 text-[#277DA1]">PayPal</h3>
          <a
            href="https://www.paypal.com/paypalme/catapalooza"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#277DA1] hover:underline text-sm block mt-1"
          >
            Donate via PayPal
          </a>
        </div>

        {/* Venmo */}
        <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2 hover:scale-105">
          <FaMoneyBillWave className="text-3xl text-[#277DA1] mb-3 mx-auto" />
          <h3 className="text-lg font-semibold mb-2 text-[#277DA1]">Venmo</h3>
          <a
            href="https://account.venmo.com/u/catapaloozatnr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#277DA1] hover:underline text-sm block mt-1"
          >
            Donate via Venmo
          </a>
        </div>

        {/* Chewy */}
        <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2 hover:scale-105">
          <FaStoreAlt className="text-3xl text-[#277DA1] mb-3 mx-auto" />
          <h3 className="text-lg font-semibold mb-2 text-[#277DA1]">Chewy Wish List</h3>
          <a
            href="https://www.chewy.com/g/catapalooza-inc_b77045412#wish-list&wishlistsortby=DEFAULT"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#277DA1] hover:underline text-sm"
          >
            Visit List
          </a>
        </div>

        {/* Amazon */}
        <div className="bg-white shadow-lg p-6 rounded-xl hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2 hover:scale-105">
          <FaAmazon className="text-3xl text-[#277DA1] mb-3 mx-auto" />
          <h3 className="text-lg font-semibold mb-2 text-[#277DA1]">Amazon Wish List</h3>
          <a
            href="https://www.amazon.com/hz/wishlist/ls/2Y6FRC405YYF2?ref_=wl_share"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#277DA1] hover:underline text-sm"
          >
            Visit List
          </a>
        </div>
      </div>
    </div>
  );
};

export default HowToHelp;