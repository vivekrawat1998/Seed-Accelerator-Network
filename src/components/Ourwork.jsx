// File: OurWork.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaChartLine, FaGlobeAsia, FaSeedling, FaBullhorn, FaBookOpen, FaStore } from "react-icons/fa";

// Data for cards
const workData = [
  {
    title: "Research Collaboration",
    desc: "We partner with rice breeding networks and conduct field trials to gather reliable insights for improving agriculture.",
    icon: "/research-and-development.png",
    color: "#38761d"
  },
  {
    title: "Varietal Deployment",
    desc: "We introduce new rice varieties in the right regions, guided by data and market research to ensure best results.",
    icon: "/research-and-development.png",
    color: "#eed972"
  },
  {
    title: "Seed System Strengthening",
    desc: "We help farmers by spreading awareness and making high-quality seeds easily accessible.",
    icon: "/research-and-development.png",
    color: "#38761d"
  },
  {
    title: "Market Research",
    desc: "We analyze markets and value chains so our products match real customer needs and expectations.",
    icon: "/research-and-development.png",
    color: "#eed972"
  },
  {
    title: "Knowledge Sharing",
    desc: "We organize trainings and demos to help communities adopt new farming techniques and varieties.",
    icon: "/research-and-development.png",
    color: "#38761d"
  },
  {
    title: "Seed Business Support",
    desc: "We enable seed companies and farmer groups to deliver reliable seeds at scale.",
    icon: "/research-and-development.png",
    color: "#38761d"
  },
];

// Main component
export default function OurWork() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: true,
      mirror: false,
    });
    AOS.refresh();
  }, []);

  return (
    <section className="bg-white py-16 relative">
      {/* Central vertical line for timeline effect */}
      <div className="hidden md:block absolute top-24 left-1/2 -translate-x-1/2 h-[66%] w-2 bg-yellow-400/50 z-0 rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h1 className="md:text-4xl text-3xl mb-10 font-Nunito text-black md:text-6xl font-bold text-center">
          Our
          <span className="px-2 py-1 text-prime rounded-xl font-parkinsans ">
            work
          </span>
          Streams
        </h1>
        <p className="text-center font-Nunito text-gray-600 max-w-xl mx-auto mb-10">
          We drive agricultural progress through teamwork, innovation, and education. Here’s what we do.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 relative">
          {workData.map((item, idx) => (
            <div
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 150}
              data-aos-offset="180"
              className="bg-white border border-yellow-400 rounded-xl shadow-md hover:shadow-lg transition p-6 max-w-sm h-[30vh] md:h-auto flex flex-col items-center text-center mx-auto relative"
            >
              <span className="inline-flex items-center justify-center rounded-full"
                style={{ background: item.color, padding: '1rem', marginBottom: '1rem', boxShadow: '0 2px 10px rgba(56, 118, 29, 0.16)' }}>
                <img src={item.icon} alt="" className="text-prime" />
              </span>
              <h3 className="text-[12px] md:text-base font-parkinsans font-bold text-[#0d2317] mb-1">{item.title}</h3>
              <p className="text-gray-700 text-[10px] md:text-sm font-Nunito">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
