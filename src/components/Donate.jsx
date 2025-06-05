// src/components/Donate.jsx
import React from 'react';
import {
  FaPaypal,
  FaMoneyBillWave,
  FaStoreAlt,
  FaPaw,
  FaAmazon
} from 'react-icons/fa';

const Donate = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 pt-36 pb-32 bg-[#f9fbfc] text-[#1D3557]">
      <h1 className="text-5xl font-extrabold mb-10 text-center">Support Our Mission</h1>
      <p className="text-lg max-w-2xl text-center mb-12">
        Your donations help us rescue, foster, and rehome abandoned cats while promoting spaying/neutering and community education.
        Every bit makes a difference!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl text-center">
        {/* PayPal */}
        <a
          href="https://www.paypal.com/paypalme/catapalooza"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#f0f7fb] rounded-xl shadow hover:shadow-lg transition p-6 flex flex-col items-center justify-center"
        >
          <FaPaypal className="text-blue-600 text-4xl mb-3" />
          <h2 className="text-xl font-semibold">Donate via PayPal</h2>
          <p className="text-sm text-gray-600 mt-1">paypal.me/catapalooza</p>
        </a>

        {/* Venmo */}
        <a
          href="https://account.venmo.com/u/catapaloozatnr"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#f0f7fb] rounded-xl shadow hover:shadow-lg transition p-6 flex flex-col items-center justify-center"
        >
          <FaMoneyBillWave className="text-blue-500 text-4xl mb-3" />
          <h2 className="text-xl font-semibold">Donate via Venmo</h2>
          <p className="text-sm text-gray-600 mt-1">@catapaloozatnr</p>
        </a>
      </div>

      {/* Chewy and Amazon Wish Lists */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl text-center mt-12">
        {/* Chewy */}
        <a
          href="https://www.chewy.com/g/catapalooza-inc_b77045412#wish-list&wishlistsortby=DEFAULT"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#f0f7fb] rounded-xl shadow hover:shadow-lg transition p-6 flex flex-col items-center justify-center"
        >
          <FaPaw className="text-[#277DA1] text-4xl mb-3" />
          <h2 className="text-xl font-semibold">Chewy Wish List</h2>
          <p className="text-sm text-gray-600 mt-1">Send supplies straight to our cats</p>
        </a>

        {/* Amazon */}
        <a
          href="https://www.amazon.com/hz/wishlist/ls/2Y6FRC405YYF2?ref_=wl_share"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#f0f7fb] rounded-xl shadow hover:shadow-lg transition p-6 flex flex-col items-center justify-center"
        >
          <FaAmazon className="text-[#FF9900] text-4xl mb-3" />
          <h2 className="text-xl font-semibold">Amazon Wish List</h2>
          <p className="text-sm text-gray-600 mt-1">Toys, food, beds & more</p>
        </a>
      </div>

      {/* In-Person Donation Info */}
      <div className="mt-16 max-w-xl text-center">
        <div className="flex items-center justify-center gap-2 text-[#277DA1] text-2xl mb-4">
          <FaStoreAlt />
          <h2 className="font-semibold text-xl">Prefer to donate in person?</h2>
        </div>
        <p className="text-gray-700 text-md leading-relaxed">
          We’re at the Waterford Lakes PetSmart every Saturday and Sunday from 12–3 PM. Come visit us and donate by cash or check!
        </p>
      </div>
    </div>
  );
};

export default Donate;