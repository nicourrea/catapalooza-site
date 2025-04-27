import React from 'react';
import catBanner from '../assets/CatapaloozaChat.jpeg'; // Ensure this path is correct

const About = () => {
  return (
    <div className="px-6 py-24 max-w-4xl mx-auto text-[#1D3557] leading-relaxed">
      {/* Catapalooza Banner */}
      <div className="flex justify-center mb-12">
        <img
          src={catBanner}
          alt="Catapalooza illustrated banner"
          className="w-full max-w-3xl rounded-xl shadow-lg transform hover:scale-105 transition-transform duration-500"
        />
      </div>

      <h1 className="text-4xl font-bold text-center mb-8 text-[#1D3557] animate__animated animate__fadeIn">
        About Catapalooza
      </h1>

      <p className="mb-6 text-lg leading-relaxed">
        Founded in 2017, <strong>Catapalooza, Inc.</strong> started as a grassroots effort to rescue two abandoned kittens. Since then, we have grown into a dedicated 501(c)(3) nonprofit organization focused on rescuing, fostering, and rehoming thousands of cats across East Orlando.
      </p>

      <p className="mb-6 text-lg leading-relaxed">
        Our mission is to promote humane care for abandoned, abused, and unwanted cats. We work to give every feline a second chance at life by finding them loving homes and educating the public on the importance of spaying and neutering.
      </p>

      <p className="mb-6 text-lg leading-relaxed">
        In addition to our adoption program, we run a Trap, Neuter, and Return (TNR) initiative, which helps reduce overpopulation and supports the community by providing resources like low-cost vet services.
      </p>

      <p className="mb-6 text-lg leading-relaxed">
        Serving neighborhoods across East Orlando, including Waterford Lakes, Avalon Park, and Stoneybrook, we’re committed to improving the lives of stray and abandoned cats, while fostering a compassionate community.
      </p>
    </div>
  );
};

export default About;