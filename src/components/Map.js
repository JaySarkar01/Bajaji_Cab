"use client";

import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";

const MapLocation = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-16 bg-gradient-to-br from-gray-950 to-gray-700">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Text and Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 text-center lg:text-left text-white space-y-5"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-50 via-amber-400 to-pink-400">
            Visit Our Location
          </h2>
          <p className="text-lg text-gray-200">
            We are based in Rudrapur, Uttarakhand — easily accessible and surrounded by natural beauty. Come meet us in person!
          </p>
          <div className="flex items-center justify-center lg:justify-start gap-3 text-amber-300 text-lg font-semibold">
            <FaMapMarkerAlt size={22} aria-label="Location Pin" />
            <span>Rudrapur, Uttarakhand, India</span>
          </div>
        </motion.div>

        {/* Embedded Google Map */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full lg:w-full h-72 sm:h-96 rounded-xl overflow-hidden shadow-2xl"
        >
          <iframe
            title="Kichha Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13959.976824580135!2d79.4141214!3d28.9875427!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a07fdaaaaaaaab%3A0x85767889b2ca2a3f!2sBalaji%20Cab!5e0!3m2!1sen!2sin!4v1676960629253!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            aria-label="Embedded Google Map showing Kichha, Uttarakhand"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default MapLocation;
