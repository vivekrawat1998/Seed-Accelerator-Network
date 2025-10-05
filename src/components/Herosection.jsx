import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Autoplay } from "swiper/modules";

const heroImages = [
  "/small-hand-planting-seeds-towards-growth-generated-by-ai.jpg",
  // "/SAM_3.JPG",a
  "/images/hero3.jpg"
];

const HeroSection = () => (
  <section className="relative w-full h-[500px] md:h-[90vh] flex items-center justify-center bg-black">
    {/* Swiper for background images */}
    <Swiper
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
            className="object-cover w-full h-full"
          />
        </SwiperSlide>
      ))}
    </Swiper>
    {/* Dark overlay for contrast */}
    <div className="absolute inset-0 w-full h-full bg-black/20 z-10"></div>

    {/* Overlay & content */}
    <div className="absolute inset-0 w-full font-Nunito h-full flex flex-col items-center justify-center px-4 md:px-0 z-20">
      {/* Tagline */}
      <div className="mb-6 mt-10">
        <span className="bg-white bg-opacity-70 text-green-700 font-semibold px-4 py-2 rounded-2xl shadow-lg text-xs drop-shadow">
          Naturally Healthy Food Solutions
        </span>
      </div>
      {/* Headline */}
      <h1 className="text-4xl md:text-6xl font-bold text-white text-center leading-tighter">
        Accelerate<span className="px-3 py-1 bg-prime/70 bg-opacity-90 rounded-xl font-mono text-white">Seeds</span>
        <br />
        <span className="mt-2 block text-green-200">Empower Farms</span>
      </h1>
      {/* Subtitle & buttons */}
      <p className="mt-6 mb-8 text-lg md:text-xl text-white text-center max-w-2xl shadow-xl  rounded-xl px-4 py-2">
        Revolutionize your farming practice with smart, sustainable, and organic solutions.
      </p>
      <div className="flex gap-3 flex-wrap justify-center">
        <a
          href="#discover"
          className="bg-green-700 text-white font-semibold px-6 py-3 rounded-xl shadow hover:bg-green-800 transition"
        >
          Explore Now
        </a>
        <a
          href="#about"
          className="bg-white text-green-800 font-semibold px-6 py-3 rounded-xl shadow hover:bg-yellow-600 hover:text-white transition border-r-4 border-yellow-500"
          style={{ position: "relative", overflow: "hidden" }}
        >
          About Us
          <span
            className="absolute right-0 bottom-0 w-3 h-full bg-yellow-500 transform skew-x-[-25deg] origin-bottom-right"
            style={{ zIndex: 0 }}
          ></span>
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
