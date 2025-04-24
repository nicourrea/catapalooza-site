// src/components/Foster.jsx
import React from 'react';
import {
  FaQuestionCircle,
  FaDollarSign,
  FaClock,
  FaPaw,
  FaShieldAlt,
} from 'react-icons/fa';

const SectionCard = ({ icon, title, children }) => (
  <div className="bg-[#f0f7fb] p-6 rounded-2xl mb-8 shadow-md">
    <h2 className="text-2xl font-bold flex items-center gap-3 mb-4 text-[#1D3557]">
      {icon} {title}
    </h2>
    <div className="text-lg text-[#1D3557]">{children}</div>
  </div>
);

const Foster = () => {
  return (
    <div className="min-h-screen px-6 pt-36 pb-24 bg-[#f9fbfc] text-[#1D3557]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold mb-12 text-center">
          Foster With Catapalooza
        </h1>

        <SectionCard icon={<FaQuestionCircle />} title="Things to Consider">
          <ul className="list-disc list-inside space-y-2">
            <li>Do you have a preference for age? (We take in kittens to seniors.)</li>
            <li>How many cats can you foster? A whole litter (4–6), a pair, or a single adult?</li>
          </ul>
        </SectionCard>

        <SectionCard icon={<FaDollarSign />} title="What Does It Cost?">
          <p className="mb-4">
            Catapalooza covers all medical and medication costs. Here's what we provide vs. what you provide:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>We provide dewormers, medication, and vet visits (if necessary).</li>
            <li>You provide food, litter, and a safe space in your home.</li>
            <li>We distribute any donated food based on need.</li>
            <li>Canned food is helpful for weight gain, but not required.</li>
            <li>Nursing moms get Royal Canin Mother & Babycat during weaning.</li>
            <li>Bottle feeders receive formula and nipples.</li>
          </ul>
        </SectionCard>

        <SectionCard icon={<FaClock />} title="Foster Commitment">
          <p className="mb-4">
            Fostering lasts until the kittens are 12 weeks old and 3 lbs. Once ready:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>We’ll schedule spay/neuter at Oviedo Vet & Emergency (Aloma Ave).</li>
            <li>They’ll also get vaccines, microchip, and FeLV/FIV testing.</li>
            <li>You’ll drop them off and pick them up unless other arrangements are made.</li>
          </ul>
        </SectionCard>

        <SectionCard icon={<FaPaw />} title="After Surgery">
          <ul className="list-disc list-inside space-y-2">
            <li>They’ll be listed on our site and attend weekend adoption events at PetSmart (Waterford Lakes).</li>
            <li>If not adopted after a week, they return to foster care for a break.</li>
          </ul>
        </SectionCard>

        <SectionCard icon={<FaShieldAlt />} title="Safety Recommendations">
          <ul className="list-disc list-inside space-y-2">
            <li>Keep your personal cats up-to-date on vaccines.</li>
            <li>Isolate fosters from other pets for the first 2 weeks as a precaution.</li>
          </ul>
        </SectionCard>

        <div className="text-center mt-16">
          <a
            href="https://petstablished.com/adoptions/personal-information?application_type=Foster&form_id=27226"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#1D3557] text-white text-lg font-semibold py-3 px-6 rounded-xl hover:bg-[#16324c] transition duration-200"
          >
            Fill Out the Foster Application
          </a>
        </div>
      </div>
    </div>
  );
};

export default Foster;