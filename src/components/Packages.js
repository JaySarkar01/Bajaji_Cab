"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const packages = [
  {
    title: "Delhi airport to Char Dham Yatra",
    description:
      "A spiritual journey to the sacred Delhi and Char Dham shrines in Uttarakhand.",
    duration: "10D/9N",
    
    image:
      "/package-imgs/char-dham-yatra-delhi.jpg",
  },
  {
    title: "Haridwar to Char Dham Yatra",
    description:
      "A spiritual journey to the sacred Haridwar and Char Dham shrines in Uttarakhand.",
    duration: "10D/9N",
   
    image:
      "/package-imgs/Haridwar-to-char-dham-hari.jpg",
  },
  {
    title: "Pantnagar airport to Char Dham Yatra",
    description:
      "A spiritual journey to the sacred Pantnagar and Char Dham shrines in Uttarakhand.",
    duration: "10D/9N",
    
    image:
      "/package-imgs/charDham-panth.jpg",
  },
  {
    title: "Bareilly airport to Nainital, Bhimtal, and kainchi dham",
    description:
      "A scenic journey from Bareilly to the beautiful hill stations of Nainital and Bhimtal, including a visit to the famous Kainchi Dham.",
    duration: "2D/3N",
    
    image:
      "/package-imgs/Nanital_mepkcl.avif",
  },
  {
    title: "Pantnagar airport to Jim corbett, Nainital, Bhimtal, and Kainchi dham",
    description:
      "A scenic journey from Pantnagar to the beautiful hill station of Nainital and Bhimtal, including a visit to the famous Kainchi Dham and Jim Corbett National Park.",
    duration: "3D/2N",
    
    image:
      "/package-imgs/jimC.jpeg",
  },
  {
    title: "Pantnagar airport to Kasar Devi and Mukteshwar",
    description:
      " A scenic journey from Pantnagar to the beautiful hill stations of Kasar Devi and Mukteshwar.",
    duration: "3D/2N",
    
    image:
      "/package-imgs/kasar-dev.jpeg",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const onWhatAppClick = (title) => () => {
  const message = `Hi There! I am interested in the "${title} package. Can you please provide more details?`;
  const phoneNumber = "919758777017"; //WhatsApp number
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
}

export default function PackagesSection() {
  return (
    <section className="py-10 px-4 sm:px-8 bg-gradient-to-br from-purple-50 to-indigo-50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center mb-12">
        <h2 className="text-[35px] mb-2 font-bold text-gray-800">
          OUR PACKAGES
        </h2>
        <div className="flex flex-col items-end justify-end text-gray-500">
        <p className=" font-normal md:text-xl text-lg  cursor-pointer">
        We provide safe & secure journey with lots of memories.
        </p>
        <p className="font-normal md:text-xl text-lg  cursor-pointer">
        We are specialized in providing affordable car booking packages.    </p>
        </div>
      </div>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 max-w-7xl mx-auto">
        {packages.map((pkg, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            onClick={onWhatAppClick(pkg.title)}
            whileHover={{ scale: 1.03 }}
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col"
          >
            <div className="relative w-full h-40 rounded-t-xl overflow-hidden">
              <Image
                src={pkg.image}
                alt={pkg.title}
                width={600}
                height={250}
                className="object-cover"
                priority
                sizes="100vw"
              />
            </div>

            <div className="p-5 flex flex-col gap-2 flex-grow">
              <h3 className="text-lg font-semibold text-gray-900 leading-snug">
                {pkg.title}
              </h3>
              <p className="text-gray-600 text-sm flex-grow">
                {pkg.description}
              </p>
              <div className="flex items-center justify-between mt-4">
                <span className="text-gray-600 font-medium text-lg">
                  {pkg.duration}
                </span>
                <span >
                <button className="hero-button bg-gradient-to-r from-amber-200 to-yellow-500 text-black px-6 py-3 rounded-lg font-bold transition-all duration-300 shadow-lg text-lg">
                Book now
              </button>
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
