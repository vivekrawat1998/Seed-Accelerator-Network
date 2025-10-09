import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const dashboard = [
  { label: "Regions Covered (2024)", value: 6 },
  { label: "Regions Covered (2025)", value: 5 },
  { label: "Organizations (2024)", value: 47 },
  { label: "Organizations (2025)", value: 27 },
  { label: "Seed Varieties (2024)", value: 32 },
  { label: "Seed Varieties (2025)", value: 22 },
  { label: "Seed Varieties (2025)", value: 22 },
  { label: "Licensing Facilitated", value: "Yes" },
];

const DashboardOverview = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section ref={ref} className="max-w-5xl mx-auto py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {dashboard.map((item, idx) => (
          <div
            key={idx}
            className="
              bg-gradient-to-br from-green-200 via-teal-200 to-emerald-200
              p-0.5 rounded-2xl transition-all duration-200
              hover:from-green-400 hover:to-emerald-400 hover:scale-105
              shadow-lg
            "
          >
            <div className="
              bg-white rounded-2xl h-full w-full text-center flex flex-col items-center justify-center
              py-8 px-5
              transition-all duration-200
              hover:shadow-2xl
            ">
              <div className="
                text-4xl md:text-5xl font-extrabold text-green-700 mb-2 drop-shadow-[0_2px_4px_rgba(34,197,94,0.18)]
                transition-all duration-200
              ">
                {typeof item.value === "number"
                  ? inView
                    ? <CountUp end={item.value} duration={1} />
                    : 0
                  : <span className="text-green-700">{item.value}</span>
                }
              </div>
              <div className="text-gray-700 mt-2 text-xs md:text-base font-semibold">{item.label}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DashboardOverview;
