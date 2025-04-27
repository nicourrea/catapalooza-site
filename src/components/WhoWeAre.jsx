// src/components/WhoWeAre.jsx
import React from 'react';
import { FaHeart } from 'react-icons/fa';

const WhoWeAre = () => {
  return (
    <div className="px-6 py-24 max-w-4xl mx-auto text-[#1D3557] leading-relaxed">
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-12 animate__animated animate__fadeIn">
        Who We Are
      </h1>

      {/* Section 1 */}
      <div className="mb-16 text-center animate__animated animate__fadeIn animate__delay-1s">
        <h2 className="text-2xl font-bold text-[#277DA1] mb-4">A Community of Cat Lovers</h2>
        <p className="text-lg">
          Catapalooza is made up of a small, dedicated group of volunteers who believe every cat deserves love,
          safety, and a second chance. Our work is fueled by compassion, teamwork, and an unshakable
          commitment to the animals in our community.
        </p>
      </div>

      {/* Section 2 */}
      <div className="mb-16 text-center animate__animated animate__fadeIn animate__delay-2s">
        <h2 className="text-2xl font-bold text-[#277DA1] mb-4">What Drives Us</h2>
        <p className="text-lg">
          We are driven by the belief that no cat should be forgotten. Whether abandoned, injured, or overlooked,
          every feline deserves a chance to feel loved, cared for, and wanted. We step in to be their voice,
          and their bridge to a better life.
        </p>
      </div>

      {/* Section 3 */}
      <div className="mb-16 text-center animate__animated animate__fadeIn animate__delay-3s">
        <h2 className="text-2xl font-bold text-[#277DA1] mb-4">How We Work</h2>
        <p className="text-lg">
          Catapalooza is more than just a rescue. We are foster homes, transporters, caregivers, advocates,
          and adopters working together to create a safe path for cats to find their forever families.
          From field rescues to cozy living rooms, we give our best — every step of the way.
        </p>
      </div>

      {/* Bottom Heart */}
      <div className="flex justify-center mt-16 animate__animated animate__fadeIn animate__delay-4s">
        <FaHeart className="text-4xl text-[#277DA1]" />
      </div>
    </div>
  );
};

export default WhoWeAre;