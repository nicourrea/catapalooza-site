// src/components/About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 pt-24 pb-12 text-gray-800">
      <h1 className="text-4xl font-bold mb-6 text-center">About Catapalooza</h1>
      <p className="mb-4">
        Founded in 2017, Catapalooza began as a grassroots effort to help a pair of abandoned kittens. Since then, we've grown into a registered 501(c)(3) nonprofit dedicated to rescuing, fostering, and rehoming thousands of cats across East Orlando.
      </p>
      <p className="mb-4">
        Our mission is to provide humane care and treatment for abandoned, abused, and unwanted cats, while educating the public about responsible pet ownership and the importance of spaying and neutering.
      </p>
      <p className="mb-4">
        We offer in-person adoptions through our partners at PetSmart in Waterford Lakes, and support local communities with outreach programs like Trap-Neuter-Return (TNR) and affordable spay/neuter services.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Our Goals</h2>
      <ul className="list-disc list-inside mb-6">
        <li>Rescue cats from neglectful, abusive, or unsafe conditions</li>
        <li>Provide necessary medical care and rehabilitation</li>
        <li>Place rescued cats into loving, permanent homes</li>
        <li>Promote spay/neuter education and advocacy</li>
        <li>Support the community through TNR and low-cost vet assistance</li>
      </ul>
      <p>
        Catapalooza proudly serves East Orlando neighborhoods east of Alafaya Trail and south to the Beachline (SR 528). We are powered by a passionate team of volunteers who work tirelessly to give every cat a second chance.
      </p>
    </div>
  );
};

export default About;