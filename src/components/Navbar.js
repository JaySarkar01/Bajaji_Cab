"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Car Rental", href: "/car-rental" },
  {
    name: "Daily Packages",
    dropdown: [
      { name: "Shirni", href: "/packages/shirni" },
      { name: "Mumbai", href: "/packages/mumbai" },
      { name: "Delhi", href: "/packages/delhi" },
      { name: "Varanasi", href: "/packages/varanasi" },
    ],
  },
  {
    name: "Tours",
    dropdown: [{ name: "Blog", href: "/tours/blog" }],
  },
  { name: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  // Close sidebar on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="w-full bg-yellow-500 shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="https://balaji.cab/static/images/logo-white.png"
            alt="Balaji Cab Logo"
            width={160}
            height={60}
            className="object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map((item, i) =>
            !item.dropdown ? (
              <Link
                key={i}
                href={item.href}
                className="text-xl
                font-medium text-white transition-colors"
              >
                {item.name}
              </Link>
            ) : (
              <div key={i} className="relative group">
                <button
                  className="text-xl text-gray-50 hover:text-white transition-colors px-2 py-1 font-medium"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {item.name}
                </button>

                <div className="absolute left-0 top-7 mt-2 min-w-[200px] bg-white rounded-xl shadow-xl border border-gray-200 opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-200 ease-in-out z-50">
                  {item.dropdown.map((d, j) => (
                    <Link
                      key={j}
                      href={d.href}
                      className="block px-4 py-2 text-lg text-gray-700 hover:text-yellow-600 hover:bg-gray-100 rounded-xl hover:font-medium transition-colors duration-150"
                    >
                      {d.name}
                    </Link>
                  ))}
                </div>
              </div>
            )
          )}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-100 focus:outline-none"
          onClick={() => setIsOpen(true)}
          aria-label="Toggle Mobile Menu"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Sidebar and Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black z-40"
            />
            {/* Sidebar */}
            <motion.div
              ref={sidebarRef}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 w-72 h-full bg-white shadow-2xl z-50 px-6 py-6 flex flex-col gap-6"
            >
              {/* Close icon */}
              <div className="flex justify-end">
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Close Sidebar"
                >
                  <X
                    size={26}
                    className="text-gray-500 hover:text-red-500 transition"
                  />
                </button>
              </div>

              {/* Links */}
              <div className="flex flex-col gap-6">
                {navItems.map((item, i) =>
                  !item.dropdown ? (
                    <Link
                      key={i}
                      href={item.href}
                      className="text-lg text-gray-800 hover:text-orange-500 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <div key={i}>
                      <p className="font-semibold text-gray-700 mb-2">
                        {item.name}
                      </p>
                      <div className="ml-4 flex flex-col gap-2">
                        {item.dropdown.map((d, j) => (
                          <Link
                            key={j}
                            href={d.href}
                            className="text-md text-gray-600 hover:text-orange-500 transition"
                            onClick={() => setIsOpen(false)}
                          >
                            {d.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
