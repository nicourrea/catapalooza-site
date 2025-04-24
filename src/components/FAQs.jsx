// src/components/FAQs.jsx
import React from 'react';
import { FaDonate, FaCat, FaInfoCircle, FaPaw, FaBook } from 'react-icons/fa';

const FAQs = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-24 pt-36 text-[#1D3557]">
      <h1 className="text-4xl font-extrabold mb-12 text-center flex items-center justify-center gap-3 text-[#1D3557]">
        <FaInfoCircle className="text-[#277DA1]" /> Frequently Asked Questions
      </h1>

      <div className="space-y-12">
        {/* FAQ 1 */}
        <div className="bg-[#f0f7fb] p-6 rounded-xl shadow-md transition duration-300 hover:shadow-lg">
          <h2 className="text-2xl font-semibold text-[#277DA1] flex items-center gap-2">
            <FaDonate /> I don’t have PayPal or Venmo, how can I donate?
          </h2>
          <p className="text-gray-700 mt-3 leading-relaxed">
            You can make a donation by card through our adoption website—just choose "single donation" as the type. 
            Prefer giving in person? We’re at Waterford Lakes PetSmart every weekend from 12–3 PM accepting cash or checks.
          </p>
        </div>

        {/* FAQ 2 */}
        <div className="bg-[#f0f7fb] p-6 rounded-xl shadow-md transition duration-300 hover:shadow-lg">
          <h2 className="text-2xl font-semibold text-[#277DA1] flex items-center gap-2">
            <FaCat /> I found some kittens, what do I do?
          </h2>
          <p className="text-gray-700 mt-3 leading-relaxed">
            DO NOT REMOVE KITTENS unless they’re in immediate danger. Mom is likely nearby and provides the best care.
            Wait and observe. If you’re in our service area, email us and we’ll help you form a safe rescue plan.
            <br />
            Learn more:{' '}
            <a 
              href="https://www.alleycat.org/community-cat-care/finding-kittens-outdoors/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#277DA1] underline hover:text-[#1D3557] transition"
            >
              Alley Cat Allies - Finding Kittens Outdoors
            </a>
          </p>
        </div>

        {/* Resources */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-[#1D3557] flex items-center justify-center gap-2">
            <FaBook className="text-[#277DA1]" /> Resources
          </h2>

          <ul className="mt-6 space-y-4 text-[#1D3557] text-lg max-w-3xl mx-auto">
            <li className="flex items-start gap-2 hover:ml-1 transition-all">
              <FaPaw className="text-[#277DA1] mt-1" />
              <a 
                href="https://www.waggle.org/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="underline hover:text-[#1D3557] transition"
              >
                Crowdfunding for Pets in Crisis – Waggle
              </a>
            </li>
            <li className="flex items-start gap-2 hover:ml-1 transition-all">
              <FaPaw className="text-[#277DA1] mt-1" />
              <a 
                href="https://www.alleycat.org/resources/why-trap-neuter-return-feral-cats-the-case-for-tnr/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#1D3557] transition"
              >
                Learn About Trap-Neuter-Return (TNR)
              </a>
            </li>
            <li className="flex items-start gap-2 hover:ml-1 transition-all">
              <FaPaw className="text-[#277DA1] mt-1" />
              <a 
                href="https://www.alleycat.org/community-cat-care/finding-kittens-outdoors/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#1D3557] transition"
              >
                Found Kittens: What to Do
              </a>
            </li>
            <li className="flex items-start gap-2 hover:ml-1 transition-all">
              <FaPaw className="text-[#277DA1] mt-1" />
              <a 
                href="https://www.alleycat.org/community-cat-care/what-to-do-if-you-find-a-cat-outdoors/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#1D3557] transition"
              >
                Found Cat: What to Do
              </a>
            </li>
            <li className="flex items-start gap-2 hover:ml-1 transition-all">
              <FaPaw className="text-[#277DA1] mt-1" />
              <a 
                href="https://www.alleycat.org/resources/spayneuter-good-for-cats-good-for-communities/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[#1D3557] transition"
              >
                The Importance of Spay and Neuter
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FAQs;