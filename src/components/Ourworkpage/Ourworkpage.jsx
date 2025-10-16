import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// --- Data ---
const workStreams = [
  {
    title: "Research Collaboration and Insights",
    description:
      "Partnering with IRRI–NARES and agricultural experts to run adaptive trials. We analyze results to share impactful insights for smarter, data-driven strategies.",
    icon: '🔬',
    image: '/images/research.jpg',
  },
  {
    title: "Varietal Deployment and Positioning",
    description:
      "Introducing high-performing rice varieties in areas that benefit most — guided by local demand, adaptability, and environmental suitability.",
    icon: '🚀',
    image: '/images/deployment.jpg',
  },
  {
    title: "Seed System Strengthening",
    description:
      "Empowering farmers with access to improved seeds through awareness campaigns, testing, and validation across multiple regions.",
    icon: '🌾',
    image: '/images/seedsystem.jpg',
  },
  {
    title: "Market Research and Demand Creation",
    description:
      "Analyzing consumer trends and market needs to support breeding programs and ensure that new varieties match real-world market expectations.",
    icon: '📈',
    image: '/images/market.jpg',
  },
  {
    title: "Knowledge Sharing and Extension",
    description:
      "Hosting training sessions, on-field demonstrations, and awareness drives to promote sustainable farming practices and rice innovation.",
    icon: '📚',
    image: '/images/knowledge.jpg',
  },
  {
    title: "Seed Business & Enterprise Development",
    description:
      "Supporting small-scale entrepreneurs and farmer cooperatives in building profitable, scalable seed businesses that sustain rural livelihoods.",
    icon: '💰',
    image: '/images/enterprise.jpg',
  },
];

// --- Step Card with Image ---
const StepCard = ({ stream, index }) => {
  const isLeft = index % 2 === 0;

  return (
    <div
      className={`flex flex-col md:flex-row items-center justify-between gap-8 mb-20 ${
        !isLeft ? 'md:flex-row-reverse' : ''
      }`}
      data-aos={isLeft ? 'fade-right' : 'fade-left'}
      data-aos-delay={150 * index}
    >
      {/* Text Section */}
      <div className="bg-white p-8 rounded-2xl shadow-lg md:w-1/2 hover:shadow-2xl transition-transform hover:scale-[1.02]">
        <div className="flex items-start space-x-4">
          <div className="text-4xl">{stream.icon}</div>
          <h3 className="text-green-900 font-parkinsans text-2xl font-extrabold leading-snug">
            {stream.title}
          </h3>
        </div>
        <p className="text-gray-700 text-base font-Nunito mt-4 leading-relaxed">
          {stream.description}
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={stream.image}
          alt={stream.title}
          className="w-[90%] h-64 object-cover rounded-2xl shadow-md hover:shadow-xl transition-transform hover:scale-105"
        />
      </div>
    </div>
  );
};

// --- Main Component ---
const OurWorkDownstairsFlow = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-out-quad', once: true });
  }, []);

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 px-4 min-h-screen">
      {/* Intro Section */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-parkinsans font-extrabold text-green-900 mb-6">
          Our Strategic Work Streams 🌱
        </h1>
        <p className="text-lg md:text-xl font-Nunito text-gray-700 max-w-3xl mx-auto">
          At <strong>AccelerateSeeds</strong>, our mission is to strengthen the seed ecosystem 
          through science, innovation, and collaboration.  
          We work closely with researchers, farmers, and markets to create sustainable agricultural growth.
        </p>
      </div>

      {/* New Content Before Map */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <h2 className="text-3xl md:text-4xl font-parkinsans font-bold text-green-800 mb-6">
          Transforming Agriculture Through Collaboration 🌾
        </h2>
        <p className="text-gray-700 text-lg font-Nunito max-w-3xl mx-auto leading-relaxed">
          From research to market, every step of our process is designed to empower farmers,
          improve productivity, and ensure food security through innovation and inclusivity.
        </p>
      </div>

      {/* Map Section */}
      <div className="grid place-items-center mb-24">
        <img
          src="/our work.png"
          alt="Our Work Map"
          className="w-[80vh] h-full object-cover rounded-xl shadow-lg"
        />
      </div>

      {/* Work Streams (Cards + Images) */}
      <div className="max-w-6xl mx-auto flex flex-col">
        {workStreams.map((stream, idx) => (
          <StepCard key={idx} stream={stream} index={idx} />
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center mt-24 max-w-xl mx-auto" data-aos="zoom-in">
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
