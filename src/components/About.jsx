// src/components/About.jsx
import React from 'react';
import catBanner from '../assets/CatapaloozaChat.jpeg'; // make sure this path is correct

const About = () => {
  return (
    <div className="px-6 py-24 max-w-4xl mx-auto text-[#1D3557] leading-relaxed">
      {/* Catapalooza Banner */}
      <div className="flex justify-center mb-10">
        <img
          src={catBanner}
          alt="Catapalooza illustrated banner"
          className="w-full max-w-3xl rounded-xl shadow-md"
        />
      </div>

      <h1 className="text-4xl font-bold text-center mb-8 text-[#1D3557]">About Catapalooza</h1>

      <p className="mb-4">
        Founded in 2017, <strong>Catapalooza, Inc.</strong> began as a grassroots effort to help two kittens abandoned in a shopping bag. Today, we’re a registered 501(c)(3) nonprofit dedicated to rescuing, fostering, and rehoming thousands of cats across East Orlando.
      </p>

      <p className="mb-4">
        What started as a good deed by a few passionate women has grown into a community-driven mission to provide cats and kittens with safe, loving homes. We work tirelessly to extend our reach and ensure that every feline gets the second chance they deserve.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Our Mission</h2>
      <p className="mb-4">
        Catapalooza is committed to promoting humane care and treatment of abandoned, abused, and unwanted cats while educating the public on responsible pet ownership and the importance of spaying and neutering. We also operate a rescue and adoption program.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4">Our Goals</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>Rescue cats from abusive, neglectful, or unsafe conditions</li>
        <li>Provide necessary veterinary care and rehabilitation</li>
        <li>Place cats into permanent, loving homes</li>
        <li>Promote spay/neuter education and advocacy</li>
        <li>Support the community through Trap-Neuter-Return (TNR) and low-cost vet assistance</li>
      </ul>

      <h2 className="text-2xl font-bold mt-10 mb-4">Where We Serve</h2>
      <p>
        We proudly serve East Orlando neighborhoods east of Alafaya Trail (Bonneville, Fairways, Deerwood, Bithlo, Christmas) and south to the Beachline/528, including Waterford Lakes, Stoneybrook, and Avalon Park.
      </p>
    </div>
  );
};

export default About;