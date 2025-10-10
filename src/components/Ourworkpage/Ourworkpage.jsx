import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaMapMarkerAlt } from 'react-icons/fa';

// --- Data ---
const cardMeta = [
  { year: '2018' },
  { year: '2019' },
  { year: '2020' },
  { year: '2021' },
  { year: '2022' },
  { year: '2023' },
];

const workStreams = [
  { title: "Research Collaboration and Insights", description: "Collaborating with IRRI–NARES and partners for adaptive trials. Rigorous analysis and knowledge-sharing guide evidence-driven scaling strategies.", icon: '🔬' },
  { title: "Varietal Deployment and Positioning", description: "Strategically introducing new, high-impact rice varieties in regions where they create the most benefit, using demand profiling and suitability analysis.", icon: '🚀' },
  { title: "Seed System Strengthening", description: "Driving awareness campaigns and enabling easier access to improved seeds while validating varietal performance through wide-scale adaptive trials.", icon: '🌾' },
  { title: "Market Research and Demand Creation", description: "Investigating consumer and value-chain needs to guide breeding and deployment of rice varieties that align with real-world markets.", icon: '📈' },
  { title: "Knowledge Sharing and Extension", description: "Organizing interactive trainings, large-scale field demonstrations, and campaigns to enhance knowledge and awareness of improved rice technologies.", icon: '📚' },
  { title: "Seed Business & Enterprise Development", description: "Supporting farmer collectives and small-scale enterprises to build successful seed businesses and robust rural economies.", icon: '💰' },
];

// --- Pin and Year Marker Component ---
const PinAndYearMarker = ({ year }) => (
  <div className="absolute md:top-0 -top-12 left-1/2 transform -translate-x-1/2 z-20 transition duration-300 group-hover:scale-110">
    <div className="flex flex-col items-center">
      <FaMapMarkerAlt className="text-4xl text-green-700 bg-white rounded-full p-1 shadow-lg border-2 border-green-500" />
      <span className="mt-1 px-3 py-0.5 bg-green-500 text-white text-lg font-parkinsans font-bold rounded-full shadow-md">
        {year}
      </span>
    </div>
  </div>
);


const StepCard = ({ stream, index }) => {
  const isLeft = index % 2 === 0;

  return (
    <div
      className={`w-full flex flex-col md:flex-row ${isLeft ? 'md:justify-start' : 'md:justify-end'} group`}
      data-aos={isLeft ? "fade-right" : "fade-left"}
      data-aos-delay={150 * index}
      data-aos-offset="150"
    >
      {/* Content Card */}
      <div className={`
        w-full md:w-[47%] p-6 md:p-8 rounded-2xl shadow-xl bg-white
        hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]
        ${isLeft ? 'md:mr-auto' : 'md:ml-auto'}
      `}>
        <div className="flex items-start space-x-4">
          <div className="flex-shrink-0 text-4xl bg-green-50 p-3 rounded-xl shadow-inner border border-green-100">
            {stream.icon}
          </div>
          <h3 className="text-green-900 font-parkinsans text-2xl font-extrabold leading-snug">
            {stream.title}
          </h3>
        </div>
        <p className="text-gray-700 text-base font-Nunito mt-4 leading-relaxed">
          {stream.description}
        </p>
      </div>

      {/* Horizontal Connector (Visible only on medium+ screens) */}
      <div className={`
        hidden md:block absolute w-[50%] h-0.5 bg-green-400 top-10 -translate-y-1/2 -z-999
        ${isLeft ? 'right-[50%] border-r border-white' : 'left-[50%] border-l border-white'}
      `}></div>
    </div>
  );
};

// --- Main Component ---
const OurWorkDownstairsFlow = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-out-quad', once: true, mirror: false });
    return () => AOS.refresh(); // Cleanup on unmount
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 px-4 min-h-screen">
      <div className="max-w-6xl mx-auto text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-parkinsans font-extrabold text-green-900 mb-4 tracking-tight">
          Our Strategic Work Streams 🌱
        </h1>
        <p className="text-xl font-Nunito text-gray-700 max-w-3xl mx-auto">
          We drive change through six core pillars, transforming the rice sector one strategic step at a time.
        </p>
      </div>

      <div className='grid place-items-center mb-20'>
        <img src='/our work.png' alt='' className='w-[80vh] h-full object-cover' />
      </div>

      {/* Responsive Timeline Container */}
      <div className="relative max-w-4xl mx-auto">
        {/* Central Vertical Line (Visible on all screens) */}
        {/* <div className="absolute top-0 left-1/2 dotted transform -translate-x-1/2 h-full w-1 bg-green-300 shadow-inner z-0"></div> */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-full pointer-events-none z-0">
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 900"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', height: '100%' }}
            preserveAspectRatio="none"
          >
            <path
              d="
        M50 0
        C 80 75, 80 75, 50 150
        C 20 225, 20 225, 50 300
        C 80 375, 80 375, 50 450
        C 20 525, 20 525, 50 600
        C 80 675, 80 675, 50 750
        C 20 825, 20 825, 50 900
      "
              stroke="#00C951"
              strokeWidth="2"
              strokeDasharray="10,12"
              fill="none"
            />
          </svg>
        </div>




        {/* Timeline Items */}
        <div className="flex flex-col space-y-24   relative px-4 md:px-0">
          {workStreams.map((stream, idx) => (
            <div key={idx} className="relative min-h-[150px] flex  items-center">
              {/* Pin and Year */}
              <PinAndYearMarker className="" year={cardMeta[idx].year} />

              {/* Step Card */}
              <StepCard stream={stream} index={idx} />
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-24 max-w-xl mx-auto" data-aos="zoom-in" data-aos-offset="50">
        <h3 className="text-3xl font-parkinsans font-extrabold text-green-900 mb-6 drop-shadow-sm">
          Become a Member
        </h3>
        <a
          href="/network-members#register"
          className="inline-block bg-green-700 font-Nunito hover:bg-green-800 text-white font-bold text-lg px-12 py-4 rounded-full shadow-xl transition transform hover:scale-105"
        >
          Register Now
        </a>
      </div>
    </div>
  );
};

export default OurWorkDownstairsFlow;
