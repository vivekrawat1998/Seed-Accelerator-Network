import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

// --- SECTION DATA ---
const sections = [
  {
    title: "The Emerging Rice",
    image: "/the emerginf rice.png",
    caption: "India needs to fast-pace the adoption of emerging rice segments at vast agricultural base.",
  },
  {
    title: "Seeds: The Heart of Farming",
    image: "/seeds.png",
    caption: "Seeds determine yield, profitability, and resilience — yet older varieties dominate.",
  },
  {
    title: "From Research to Farmers’ Fields",
    images: [
      "/field 1.png",
      "/field 2.png",
      "/field3.png",
    ],
    caption: "Testing, positioning, advocating new varieties in real farming conditions to build trust.",
  },
  {
    title: "Challenges for Seed Accelerators",
    image: "/challenge .png",
    caption: "Seed accelerators struggle to access timely information and basic seeds of new varieties.",
  },
  {
    title: "The Birth of the Seed Accelerator Network (SAN)",
    image: "/birth of san .png",
    caption: "Seeds determine yield, profitability, and resilience — yet older varieties dominate.",
  },
  {
    title: "Stronger Seed Systems",
    image: "/stronger seed system.png",
    caption: "Improving seed availability, awareness campaigns, and enterprise development.",
  },
  {
    title: "Towards Resilient Farming Futures",
    image: "/Towards refarming.png",
    caption: "Faster varietal turnover means higher yields, better incomes, and climate resilience.",
  },
];

const beforeAfter = [
  {
    before: "/before.png",
    after: "/after.png",
    title: "Modern Irrigation Solutions",
    caption: "Rice fields before and after implementation of modern irrigation solutions.",
  },
];

// --- BEFORE/AFTER CARD ---
function BeforeAfterCard({ item }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col md:flex-row gap-3 items-center w-full">
        <div className="flex-1">
          <img src={item.before} alt="Before" className="w-full h-64 object-cover rounded-lg" />
          <p className="text-center mt-2 text-gray-500 font-semibold">Before</p>
        </div>
        <div className="flex-1">
          <img src={item.after} alt="After" className="w-full h-64 object-cover rounded-lg" />
          <p className="text-center mt-2 text-gray-500 font-semibold">After</p>
        </div>
      </div>
      <h2 className="text-lg md:text-xl font-bold font-parkinsans mt-4 text-[#178650] text-center">{item.title}</h2>
      <p className="text-sm md:text-base text-gray-700 font-medium text-center mt-2">{item.caption}</p>
    </div>
  );
}

// --- FINAL SECTION COMPONENT ---
export default function RiceSectionsCombined() {
  const [showAll, setShowAll] = useState(false);

  // Build cards list by inserting before/after after the 2nd section
  let cards = [];
  if (!showAll) {
    // Just first two sections + before/after
    sections.slice(0, 2).forEach((s, i) => {
      cards.push({ section: s, type: "normal" });
      if (i === 1) {
        cards.push({ item: beforeAfter[0], type: "beforeafter" });
      }
    });
  } else {
    // All sections + before/after after 2nd item
    sections.forEach((s, i) => {
      cards.push({ section: s, type: "normal" });
      if (i === 1) {
        cards.push({ item: beforeAfter[0], type: "beforeafter" });
      }
    });
  }

  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
        {cards.map((entry, idx) =>
          entry.type === "beforeafter" ? (
            <BeforeAfterCard key={"beforeafter-" + idx} item={entry.item} />
          ) : (
            <div key={idx} className="flex flex-col items-center">
              {/* Single image or swiper gallery */}
              {entry.section.image && (
                <img
                  src={entry.section.image}
                  alt={entry.section.title}
                  className="w-full aspect-[16/11] object-cover rounded-2xl mb-4"
                />
              )}
              {entry.section.images && (
                <Swiper
                  spaceBetween={16}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                  style={{
                    width: '100%',
                    height: '224px',
                    borderRadius: '1rem',
                    marginBottom: '1rem'
                  }}
                >
                  {entry.section.images.map((img, sidx) => (
                    <SwiperSlide key={sidx}>
                      <img
                        src={img}
                        alt={`${entry.section.title} ${sidx + 1}`}
                        className="h-56 w-full object-cover rounded-xl mx-auto"
                        style={{ maxHeight: "224px" }}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              )}
              <h2 className="font-bold text-lg md:text-xl mt-2 text-[#178650] text-center font-parkinsans">{entry.section.title}</h2>
              <p className="text-sm md:text-base text-gray-700 text-center font-medium font-Nunito mt-2">{entry.section.caption}</p>
            </div>
          )
        )}
      </div>
      {!showAll && (
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowAll(true)}
            className="bg-[#178650] text-white font-semibold px-8 py-3 rounded-full text-lg hover:bg-[#116e37] transition"
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
}
