import React from 'react';
import { FaHandHoldingHeart, FaHeartbeat, FaChalkboardTeacher, FaRecycle } from 'react-icons/fa'; // Importing relevant icons

const OurMission = () => {
  return (
    <div className="px-6 py-24 max-w-6xl mx-auto text-[#1D3557] leading-relaxed">
      <h1 className="text-4xl font-bold text-center mb-8 text-[#1D3557] animate__animated animate__fadeIn">
        Our Mission
      </h1>

      <p className="mb-6 text-lg leading-relaxed">
        At Catapalooza, our mission is to ensure that every cat we rescue finds its forever home in a safe and loving environment. We are committed to addressing the growing population of homeless cats in East Orlando through strategic efforts that involve rescue, medical care, and proactive community education.
      </p>

      <p className="mb-6 text-lg leading-relaxed">
        Our mission extends beyond just finding homes. We believe in creating sustainable change by addressing the root causes of overpopulation. Through our <strong className="text-[#277DA1]">Trap-Neuter-Release (TNR)</strong> program, we focus on managing the feral cat population to ensure healthier lives for outdoor cats while reducing the spread of diseases and preventing further breeding.
      </p>

      <p className="mb-6 text-lg leading-relaxed">
        We also strive to raise awareness about the importance of spaying and neutering, as well as responsible pet ownership. By educating the public, we aim to foster a culture of compassion where the lives of cats and all animals are valued, and the act of adoption becomes a first choice for families.
      </p>

      <h2 className="text-2xl font-bold mt-10 mb-4 text-[#277DA1]">Our Goals</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Goal 1: Rescue */}
        <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl animate__animated animate__fadeIn animate__delay-1s group">
          <div className="flex flex-col items-center group">
            <FaHandHoldingHeart className="text-4xl text-[#277DA1] mb-4 group-hover:text-[#4fa3f7] transition-colors duration-300" />
            <h3 className="text-lg font-semibold text-center mb-2 text-[#1D3557] group-hover:text-[#4fa3f7] transition-colors duration-300">
              Rescue
            </h3>
          </div>
          <p className="text-sm text-center text-[#555]">
            We are dedicated to rescuing cats from unsafe conditions, providing them with medical attention, and placing them in permanent, loving homes.
          </p>
        </div>

        {/* Goal 2: Medical Care */}
        <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl animate__animated animate__fadeIn animate__delay-2s group">
          <div className="flex flex-col items-center group">
            <FaHeartbeat className="text-4xl text-[#277DA1] mb-4 group-hover:text-[#4fa3f7] transition-colors duration-300" />
            <h3 className="text-lg font-semibold text-center mb-2 text-[#1D3557] group-hover:text-[#4fa3f7] transition-colors duration-300">
              Medical Care
            </h3>
          </div>
          <p className="text-sm text-center text-[#555]">
            Every rescued cat receives essential medical care, including vaccinations and spaying/neutering, ensuring a healthy future.
          </p>
        </div>

        {/* Goal 3: Community Education */}
        <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl animate__animated animate__fadeIn animate__delay-3s group">
          <div className="flex flex-col items-center group">
            <FaChalkboardTeacher className="text-4xl text-[#277DA1] mb-4 group-hover:text-[#4fa3f7] transition-colors duration-300" />
            <h3 className="text-lg font-semibold text-center mb-2 text-[#1D3557] group-hover:text-[#4fa3f7] transition-colors duration-300">
              Community Education
            </h3>
          </div>
          <p className="text-sm text-center text-[#555]">
            We believe in the power of education to prevent pet overpopulation and to promote responsible pet ownership practices.
          </p>
        </div>

        {/* Goal 4: TNR Program */}
        <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-2xl animate__animated animate__fadeIn animate__delay-4s group">
          <div className="flex flex-col items-center group">
            <FaRecycle className="text-4xl text-[#277DA1] mb-4 group-hover:text-[#4fa3f7] transition-colors duration-300" />
            <h3 className="text-lg font-semibold text-center mb-2 text-[#1D3557] group-hover:text-[#4fa3f7] transition-colors duration-300">
              TNR Program
            </h3>
          </div>
          <p className="text-sm text-center text-[#555]">
            Our active TNR initiative helps address the root causes of overpopulation by managing the local feral cat communities.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurMission;