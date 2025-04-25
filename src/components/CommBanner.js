"use client";
import React from "react";
import { Inter } from "next/font/google";
  const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-inter',
    display: 'swap',
  });

const Combanner = () => {
  return (
    <div className={`${inter.className} flex flex-col md:flex-row items-start justify-between max-w-7xl mx-auto border-2 border-gray-200 border-dashed rounded-2xl p-8 gap-8 bg-white shadow-sm`}>
      
      {/* Left Section */}
      <div className="md:w-2/3 border-r-0 md:border-r-2 md:border-gray-200 md:border-dashed pr-0 md:pr-8 space-y-6">
        <h1 className="text-3xl md:text-4xl text-gray-800 font-semibold tracking-wide leading-snug">
          Hello. We Help You To Travel In India with{" "}
          <span className="text-blue-950 font-bold">Balaji Cab</span>
        </h1>

        <p className="text-gray-500 leading-relaxed text-base">
        Your best cab booking experience awaits. We provide wide range of package for all tourist places in India. Our premium services ensure customer comfort while they travel with us. Expert drivers focus on customer safety; we understand that&apos;s important to you.
        </p>

        <div className="flex flex-wrap gap-4 pt-4" onClick={() =>
    window.open(
      "https://wa.me/917895497017?text=Hello%20Balaji%20Cab%20Team!%20I%20am%20interested%20in%20your%20services.",
      "_blank"
    )
  }>
          <button className="bg-gradient-to-r from-amber-200 to-yellow-500 text-black py-3 px-8 rounded-xl hover:bg-yellow-600 transition-all font-bold shadow-sm">
            Book now
          </button>
          <button className="bg-white text-yellow-600 border-2 border-yellow-200 py-3 px-8 rounded-xl hover:border-yellow-300 transition-all font-bold">
            Contact us
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/3 flex flex-col justify-between h-full space-y-6">
        <p className="text-gray-800 leading-relaxed text-base tracking-normal font-extralight">
          Chopta is one of my favorite place to visite and see the natural beauty. You can go with your family of friends! and the service of Balaji cab was aslo too good for me in Chopta visiting.
        </p>
        <div className="text-right mt-auto">
          <p className="text-yellow-600 font-semibold">Ravi Gupta</p>
          <p className="text-gray-500 text-sm">Traveler</p>
        </div>
      </div>
    </div>
  );
};

export default Combanner;
