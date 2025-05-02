"use client";
import Image from "next/image";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Inter } from "next/font/google";
  const inter = Inter({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-inter',
    display: 'swap',
  });

gsap.registerPlugin(ScrollTrigger);

export default function HeroSection() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);
  const testimonialRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        end: "bottom bottom",
        toggleActions: "play none none none",
      }
    });

    tl.from(headingRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    })
    .from(contentRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.4")
    .from(imageRef.current, {
      y: 50,
      opacity: 0,
      scale: 0.95,
      duration: 0.8,
      ease: "back.out(1.2)"
    }, "-=0.6")
    .from(testimonialRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out"
    }, "-=0.4");

    const buttons = gsap.utils.toArray(".hero-button");

buttons.forEach((button) => {
  const handleMouseEnter = () => {
    gsap.to(button, {
      y: -3,
      duration: 0.2,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = () => {
    gsap.to(button, {
      y: 0,
      duration: 0.2,
      ease: "power2.out"
    });
  };

  button.addEventListener("mouseenter", handleMouseEnter);
  button.addEventListener("mouseleave", handleMouseLeave);
});


    return () => {
      tl.kill();
      buttons.forEach((button) => {
        button.removeEventListener("mouseenter", () => {});
        button.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <section ref={sectionRef} className={`${inter.className} w-full px-6 md:px-12 py-12 md:py-20 bg-white text-gray-900`}>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 ref={headingRef} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
            A Look at <span className="text-yellow-400">Balaji Cab Drivers</span>
          </h1>

          <div ref={contentRef} className="space-y-6">
            <p className="text-xl font-semibold text-yellow-500">
              Top-50 in cab service
            </p>
            <p className="text-gray-700 text-lg md:text-xl max-w-lg">
              <span className="font-semibold text-gray-900">Manage your Trip with Balaji</span>, Masters of the Maze, Sefty Sherpas, Conversationalists with a Cause, The Extra Mile Maniac, Champions of Customer Care. All from a single platform.
            </p>

            {/* Buttons */}
            <div className="flex gap-4 flex-wrap"  onClick={() =>
    window.open(
      "https://wa.me/919758777017?text=Hello%20Balaji%20Cab%20Team!%20I%20am%20interested%20in%20your%20services.",
      "_blank"
    )
  }>
              <button className="hero-button bg-gradient-to-r from-amber-200 to-yellow-500 hover:bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold transition-all duration-300 shadow-lg text-lg">
                Book now
              </button>
              <button className="hero-button bg-white border border-yellow-200 hover:border-yellow-300 text-yellow-600 px-6 py-3 rounded-lg font-bold transition-all duration-300 shadow text-lg">
                Contact us
              </button>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div ref={imageRef} className="relative w-full h-full min-h-[300px] md:min-h-[400px]">
          <Image
            src="/hero-Imgs/yellow_car.webp"
            alt="Hero Car Banner"
            fill
            className="rounded-xl object-cover object-center shadow-xl"
            priority
          />
          <div className="absolute -bottom-4 -right-4 bg-yellow-300 w-24 h-24 rounded-lg z-0 hidden md:block"></div>
        </div>
      </div>
    </section>
  );
}
