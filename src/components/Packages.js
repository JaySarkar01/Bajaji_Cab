"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const packages = [
  {
    title: "Mahabaleshwar Hill Station Tour",
    description:
      "Scenic getaway to the lush green hills and waterfalls of Mahabaleshwar.",
    duration: "3D/2N",
    price: "₹9,500",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/d7/a9/a2/view-of-rock-formation.jpg?w=300&h=300&s=1",
  },
  {
    title: "Shirdi Sai Baba Darshan",
    description:
      "Spiritual journey to the holy town of Shirdi, visiting the Sai Baba temple.",
    duration: "1D/2N",
    price: "₹4,000",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/d7/a9/a2/view-of-rock-formation.jpg?w=300&h=300&s=1",
  },
  {
    title: "Goa Beach Holiday",
    description:
      "Relaxing vacation on the golden beaches of Goa with water sports and nightlife.",
    duration: "4D/5N",
    price: "₹12,000",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/d7/a9/a2/view-of-rock-formation.jpg?w=300&h=300&s=1",
  },
  {
    title: "Mumbai City Tour",
    description:
      "Explore the vibrant city of Mumbai, visiting famous landmarks and attractions.",
    duration: "2D/1N",
    price: "₹6,500",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/d7/a9/a2/view-of-rock-formation.jpg?w=300&h=300&s=1",
  },
  {
    title: "Lonavala-Khandala Weekend Trip",
    description:
      "Refreshing weekend escape to the misty valleys and caves of Lonavala",
    duration: "2D/1N",
    price: "₹5,500",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/d7/a9/a2/view-of-rock-formation.jpg?w=300&h=300&s=1",
  },
  {
    title: "Shirdi Package",
    description: "2 days pilgrimage tour covering Shirdi and nearby temples.",
    duration: "2D/1N",
    price: "₹5,000",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/d7/a9/a2/view-of-rock-formation.jpg?w=300&h=300&s=1",
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
  const phoneNumber = "919368043648"; // Replace with your WhatsApp number
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
                <span className="text-gray-500 font-medium text-lg">
                  {pkg.duration}
                </span>
                <span className="text-green-600 font-bold text-2xl md:text-3xl">
                  {pkg.price}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
