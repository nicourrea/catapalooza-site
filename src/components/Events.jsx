// src/components/Events.jsx
import React from 'react';

const Events = () => {
  return (
    <div className="text-gray-800 px-6 pt-24 pb-12 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-10 text-[#1D3557]">Upcoming Events</h1>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="bg-white shadow-md rounded-xl p-6 border">
          <h2 className="text-2xl font-semibold text-[#277DA1] mb-2">Adoption Day</h2>
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
          <h2 className="text-2xl font-semibold text-[#277DA1] mb-2">Spirit Night</h2>
          <p className="text-gray-700 mb-1">
            🗓️ <strong>Date:</strong> April 18, 2024
          </p>
          <p className="text-gray-700 mb-1">
            📍 <strong>Location:</strong> Portillo’s – Waterford Lakes, Orlando, FL
          </p>
          <p className="text-gray-700">
            Mention Catapalooza at checkout and a portion of the proceeds will go to the nonprofit!
          </p>
        </div>

        <div className="bg-white shadow-md rounded-xl p-6 border md:col-span-2">
          <h2 className="text-2xl font-semibold text-[#277DA1] mb-2">Volunteer Training</h2>
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