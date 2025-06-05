import React from 'react';
import { FiMail } from 'react-icons/fi';
import { FaClock, FaMapMarkerAlt, FaPaw } from 'react-icons/fa';

const EmailUs = () => {
  return (
    <div className="flex flex-col items-center px-4 pt-24 pb-10 bg-[#f9fbfc] text-[#1D3557]">
      <h1 className="text-5xl font-extrabold mb-10 text-center">Let’s Connect</h1>

      <div className="bg-[#f0f7fb] max-w-2xl w-full p-10 rounded-2xl shadow-xl text-center space-y-10">
        <div>
          <p className="text-xl leading-relaxed">
            Have a question about adoptions, donations, or volunteering?<br />
            We’d love to hear from you!
          </p>

          <div className="flex justify-center mt-6">
            <a
              href="mailto:catapaloozatnr@gmail.com"
              className="inline-flex items-center gap-3 bg-[#277DA1] hover:bg-[#1D3557] text-white px-8 py-4 rounded-lg font-semibold text-lg transition duration-300"
            >
              <FiMail className="text-2xl" />
              Email catapaloozatnr@gmail.com
            </a>
          </div>

          <p className="mt-6 text-base text-gray-600 leading-relaxed">
            We typically respond within 24–48 hours.<br />
            For urgent rescue situations, please include as much detail as possible.
          </p>
        </div>

        <div className="flex items-center justify-center gap-3 text-[#277DA1]">
          <hr className="flex-grow border-gray-300" />
          <FaPaw className="text-xl" />
          <hr className="flex-grow border-gray-300" />
        </div>

        <div className="text-left space-y-4 text-base text-[#1D3557]">
          <div className="flex items-start gap-2">
            <FaClock className="mt-1 text-[#277DA1]" />
            <div>
              <p><strong>Adoption Hours:</strong> Every Saturday and Sunday, 12–3 PM</p>
              <p className="text-sm text-gray-600 mt-1 italic">
                *Adoption days do not take place on holidays.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <FaMapMarkerAlt className="mt-1 text-[#277DA1]" />
            <p>
              <strong>Location:</strong> Waterford Lakes PetSmart,<br />
              <a
                href="https://maps.apple.com/?q=731+N+Alafaya+Trail,+Orlando,+FL+32828"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#277DA1] underline hover:text-[#1D3557]"
              >
                731 N Alafaya Trail, Orlando, FL 32828
              </a>
            </p>
          </div>
          <div className="mt-3 text-center text-sm">
            Want to stay updated? Check out our social media pages and say hello!
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailUs;