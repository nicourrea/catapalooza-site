// src/components/AreasWeServe.jsx
import React from 'react';
import { FaMapMarkerAlt, FaInfoCircle } from 'react-icons/fa'; // Icons

const serviceAreas = [
  { zip: '32828', area: 'Waterford Lakes, Avalon Park' },
  { zip: '32826', area: 'Bonneville' },
  { zip: '32820', area: 'Bithlo' },
  { zip: '32833', area: 'Christmas' },
  { zip: '32825', area: 'Fairways' },
  { zip: '32825', area: 'Deerwood' },
];

const AreasWeServe = () => {
  return (
    <div className="px-6 py-24 max-w-6xl mx-auto text-[#1D3557] leading-relaxed">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-8 text-[#1D3557]">
        Areas We Serve
      </h1>

      {/* Intro Paragraph */}
      <p className="mb-12 text-lg leading-relaxed text-center">
        Catapalooza proudly rescues, fosters, and rehomes cats found in the neighborhoods listed below.
        We focus on serving areas where the need is greatest, but we are always happy to help direct you
        to other resources if you're outside of our primary service zones.
      </p>

      {/* Area Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {serviceAreas.map((item, index) => (
          <div
            key={index}
            className="relative bg-white rounded-xl shadow-md overflow-hidden group transform transition hover:scale-105 hover:shadow-lg hover:ring-2 hover:ring-[#a6d3f2]"
          >
            <div className="p-6 text-center">
              <FaMapMarkerAlt className="text-4xl text-[#277DA1] mx-auto mb-4 group-hover:text-[#5eb2d8] transition-colors duration-300" />
              <h3 className="text-lg font-bold text-[#1D3557] group-hover:text-[#5eb2d8] transition-colors duration-300">
                {item.zip}
              </h3>
              <p className="text-sm text-[#555] mt-2">{item.area}</p>
            </div>

            {/* Contact Overlay on Hover */}
            <div className="absolute inset-0 bg-[#f0f7fb] flex flex-col items-center justify-center text-[#1D3557] text-center px-4 py-6 transform translate-y-full group-hover:translate-y-0 transition-all duration-500 ease-in-out">
              <p className="text-lg font-semibold mb-2">Found a cat in your area?</p>
              <a
                href="/contact/email"
                className="text-[#277DA1] underline hover:text-[#5eb2d8] text-sm"
              >
                Contact Us
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Important Help Message */}
      <div className="mt-16 p-6 bg-[#f0f7fb] rounded-xl shadow-md flex flex-col items-center gap-4 text-center">
        <div className="flex items-center gap-2 text-[#1D3557] mb-2">
          <FaInfoCircle className="text-2xl text-[#277DA1]" />
          <h2 className="text-xl font-bold">Important Information</h2>
        </div>
        <div className="text-lg">
          <p className="mb-4">
            If you are located outside of these areas, many wonderful rescues may be available closer to you.
            We encourage you to search online for local rescue organizations near your zip code.
          </p>
          <p>
            If you cannot find a rescue or need additional help, please feel free to <strong>contact us</strong>.
            We are happy to review your case and try to point you in the right direction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AreasWeServe;