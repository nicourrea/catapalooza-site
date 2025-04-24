// src/components/Donate.jsx
import React from 'react';
import { FaPaypal, FaMoneyBillWave, FaStoreAlt } from 'react-icons/fa'; // ✅ Fixed: FaVenmo replaced

const Donate = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 pt-36 pb-32 bg-[#f9fbfc] text-[#1D3557]">
      <h1 className="text-5xl font-extrabold mb-10 text-center">Support Our Mission</h1>
      <p className="text-lg max-w-2xl text-center mb-12">
        Your donations help us rescue, foster, and rehome abandoned cats while promoting spaying/neutering and community education.
        Every bit makes a difference!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl text-center">
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

        <a
          href="https://account.venmo.com/u/catapaloozatnr"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#f0f7fb] rounded-xl shadow hover:shadow-lg transition p-6 flex flex-col items-center justify-center"
        >
          <FaMoneyBillWave className="text-blue-500 text-4xl mb-3" /> {/* 🔄 Replaced FaVenmo */}
          <h2 className="text-xl font-semibold">Donate via Venmo</h2>
          <p className="text-sm text-gray-600 mt-1">@catapaloozatnr</p>
        </a>
      </div>

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