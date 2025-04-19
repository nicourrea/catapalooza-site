// src/components/HowToHelp.jsx
import React from 'react';

const HowToHelp = () => {
  return (
    <div className="text-gray-800 px-6 pt-24 pb-12 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">How You Can Help</h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 text-center">
        <div className="bg-white shadow-md p-6 rounded-xl">
          <h2 className="text-xl font-bold mb-2">Donate</h2>
          <p className="text-sm">Every dollar goes toward food, shelter, and medical care.</p>
        </div>
        <div className="bg-white shadow-md p-6 rounded-xl">
          <h2 className="text-xl font-bold mb-2">Volunteer</h2>
          <p className="text-sm">Join our network of passionate cat lovers.</p>
        </div>
        <div className="bg-white shadow-md p-6 rounded-xl">
          <h2 className="text-xl font-bold mb-2">Foster</h2>
          <p className="text-sm">Give a cat a temporary home and lots of love.</p>
        </div>
        <div className="bg-white shadow-md p-6 rounded-xl">
          <h2 className="text-xl font-bold mb-2">Adopt</h2>
          <p className="text-sm">Click below to view our cats and start your adoption journey.</p>
          <a
            href="https://www.petfinder.com/member/us/fl/orlando/catapalooza-inc-fl1522/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block text-orange-500 font-semibold hover:underline"
          >
            View Available Cats
          </a>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-16 mb-6 text-center">Other Ways to Contribute</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 text-center">
        <div className="bg-white shadow-md p-6 rounded-xl">
          <h3 className="text-lg font-semibold mb-2">PayPal</h3>
          <a
            href="https://www.paypal.com/paypalme/catapalooza"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 hover:underline text-sm block mt-2"
          >
            Donate via PayPal
          </a>
        </div>
        <div className="bg-white shadow-md p-6 rounded-xl">
          <h3 className="text-lg font-semibold mb-2">Venmo</h3>
          <a
            href="https://account.venmo.com/u/catapaloozatnr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 hover:underline text-sm block mt-2"
          >
            Donate via Venmo
          </a>
        </div>
        <div className="bg-white shadow-md p-6 rounded-xl">
          <h3 className="text-lg font-semibold mb-2">Chewy Wish List</h3>
          <a
            href="https://www.chewy.com/g/catapalooza-inc_b77045412#wish-list&wishlistsortby=DEFAULT"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 hover:underline text-sm"
          >
            Visit List
          </a>
        </div>
        <div className="bg-white shadow-md p-6 rounded-xl">
          <h3 className="text-lg font-semibold mb-2">Amazon Wish List</h3>
          <a
            href="https://www.amazon.com/hz/wishlist/ls/2Y6FRC405YYF2?ref_=wl_share"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-500 hover:underline text-sm"
          >
            Visit List
          </a>
        </div>
      </div>
    </div>
  );
};

export default HowToHelp;