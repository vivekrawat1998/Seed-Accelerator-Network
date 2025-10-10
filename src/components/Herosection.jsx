import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper/modules";

const heroImages = [
  "/hero pic (1).webp",
  "/seedrice.webp",
];

const HeroSection = () => {
  const swiperRef = useRef(null);

  return (
    <section className="relative w-full h-[800px] md:h-[90vh] flex items-center justify-center bg-black">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        effect="fade"
        modules={[EffectFade, Autoplay]}
        autoplay={{ delay: 4500, disableOnInteraction: false }}
        loop
        className="absolute inset-0 w-full h-full"
      >
        {heroImages.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={img}
              alt={`Hero ${idx + 1}`}
              className="object-cover w-full h-full brightness-75"
              {...(idx === 0 ? { fetchpriority: "high", loading: "eager" } : {})}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute inset-0 w-full h-full bg-black/20 z-10"></div>
      <div className="absolute inset-0 w-full font-Nunito h-full flex flex-col items-center justify-center px-4 md:px-0 z-20">
        <div className="mb-6 mt-10">
          <span className="bg-white bg-opacity-70 text-green-700 font-semibold px-4 py-2 rounded-2xl shadow-lg text-xs drop-shadow">
            Naturally Healthy Food Solutions
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center leading-tighter">
          Accelerate
          <span className="px-3 py-1 bg-prime/70 bg-opacity-90 rounded-xl font-mono text-white">
            Seeds
          </span>
          <br />
          <span className="mt-2 block text-green-200">Empower Farms</span>
        </h1>
        <p className="mt-6 mb-8 text-lg md:text-xl text-white text-center max-w-2xl  rounded-xl px-4 py-2">
          Revolutionize your farming practice with smart, sustainable, and organic solutions.
        </p>

        {/* Custom navigation buttons */}
        <div className="flex gap-6 mt-4">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            aria-label="Previous Slide"
            className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#F0B100] hover:bg-yellow-700 focus:outline-none focus:ring-4 focus:ring-yellow-400 cursor-pointer focus:ring-opacity-70 shadow-lg transition"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            aria-label="Next Slide"
            className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[#F0B100] hover:bg-yellow-700 focus:outline-none focus:ring-4 focus:ring-yellow-400 cursor-pointer focus:ring-opacity-70 shadow-lg transition"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Original buttons below */}
        <div className="flex gap-3 flex-wrap justify-center mt-6">
          <a
            href="/ourwork"
            className="bg-green-700 text-white font-semibold px-6 py-3 rounded-xl shadow hover:bg-yellow-700 transition"
          >
            Explore Now
          </a>
          <a
            href="/about"
            className="bg-white text-green-800 font-semibold px-6 py-3 rounded-xl shadow hover:bg-yellow-600 hover:text-white transition border-r-4 border-yellow-500 relative overflow-hidden"
          >
            About Us
            <span className="absolute right-0 bottom-0 w-3 h-full bg-yellow-500 transform skew-x-[-25deg] origin-bottom-right"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
