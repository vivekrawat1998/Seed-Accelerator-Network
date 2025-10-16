import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function VarietiesScalingSnapshot() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  return (
    <div className="min-h-screen bg-prime/5 flex flex-col items-center justify-start p-6 md:p-12">
      
      {/* EGS Linkage Notice */}
      <div
        className="text-red-600 font-bold font-parkinsans md:text-lg text-base mb-6 text-center"
        data-aos="fade-down"
      >
        ⚠️ EGS Linkage values are to be checked
      </div>


      {/* Main Card */}
      <div
        className="w-full max-w-3xl bg-white border border-green-700 rounded-xl shadow-lg px-6 md:px-12 py-8 mb-8"
        data-aos="zoom-in"
      >
        <h2
          className="text-2xl md:text-3xl font-extrabold font-parkinsans text-green-700 mb-6 text-center"
          data-aos="fade-up"
        >
          Varieties and Scaling (2020-2025)
        </h2>
        <ul className="text-gray-800 font-Nunito space-y-4 text-base md:text-lg">
          <li data-aos="fade-right" className="leading-relaxed">
            <span className="text-green-700 font-bold">●</span>{" "}
            5 million ha in India under STRVs (drought, submergence, salinity, healthier rice).
          </li>
          <li data-aos="fade-left" className="leading-relaxed">
            <span className="text-green-700 font-bold">●</span>{" "}
            32 improved varieties are being integrated into national seed chains.
          </li>
          <li data-aos="fade-right" className="leading-relaxed">
            <span className="text-green-700 font-bold">●</span>{" "}
            An average yield advantage of 0.4 t/ha.
          </li>
          <li data-aos="fade-left" className="leading-relaxed">
            <span className="text-green-700 font-bold">●</span>{" "}
            ~15,000 small holders trained in seed production.
          </li>
          <li data-aos="fade-right" className="leading-relaxed">
            <span className="text-green-700 font-bold">●</span>{" "}
            ~15,000 MT of quality seed through the seed network convergence.
          </li>
          <li data-aos="fade-left" className="leading-relaxed">
            <span className="text-green-700 font-bold">●</span>{" "}
            ~322 MT EGS to SSCs and SAUs.
          </li>
          <li data-aos="fade-right" className="leading-relaxed">
            <span className="text-green-700 font-bold">●</span>{" "}
            Strengthening Kalanamak value chain - through SHGs.
          </li>
          <li data-aos="fade-left" className="leading-relaxed">
            <span className="text-green-700 font-bold">●</span>{" "}
            180 rice landraces in Odisha are being evaluated for the best accessions and seed system development.
          </li>
        </ul>
      </div>

      {/* Footer note */}
      <div
        className="text-green-700 font-semibold mt-2 md:mt-4 text-base md:text-lg text-center"
        data-aos="fade-up"
      >
        Projected area and households to be impacted
      </div>
    </div>
  );
}
