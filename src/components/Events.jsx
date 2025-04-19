// src/components/Events.jsx
import React from 'react';

const Events = () => {
  return (
    <div className="text-gray-800 px-6 pt-24 pb-12 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10">Upcoming Events</h1>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="bg-white shadow-md rounded-xl p-6 border">
          <h2 className="text-2xl font-semibold text-orange-500 mb-2">Adoption Day</h2>
          <p className="text-gray-700 mb-1">
            🗓️ <strong>Date:</strong> Every Saturday
          </p>
          <p className="text-gray-700 mb-1">
            📍 <strong>Location:</strong> PetSmart – Waterford Lakes, Orlando, FL
          </p>
          <p className="text-gray-700">
            Meet our cats and kittens in person and find your perfect match! Walk-ins welcome.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 border">
          <h2 className="text-2xl font-semibold text-orange-500 mb-2">Fundraiser Gala</h2>
          <p className="text-gray-700 mb-1">
            🗓️ <strong>Date:</strong> May 25, 2025 @ 6 PM
          </p>
          <p className="text-gray-700 mb-1">
            📍 <strong>Location:</strong> East Orlando Community Hall
          </p>
          <p className="text-gray-700">
            A night of dinner, raffles, and community — all to raise money for our furry friends.
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 border md:col-span-2">
          <h2 className="text-2xl font-semibold text-orange-500 mb-2">Volunteer Training</h2>
          <p className="text-gray-700 mb-1">
            🗓️ <strong>Date:</strong> First Sunday of every month
          </p>
          <p className="text-gray-700 mb-1">
            📍 <strong>Location:</strong> Virtual (Zoom link provided after sign-up)
          </p>
          <p className="text-gray-700">
            Interested in fostering, TNR, or helping with events? This training is your first step.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Events;