import React from 'react';
import NetworkMap from '/our work.png'; // path to your uploaded image file

const workStreams = [
  {
    title: "Research Collaboration and Insights",
    description:
      "Collaborating with the IRRI–NARES One Rice Breeding Network and national extension partners (KVKs, NGOs, SAUs, Agriculture Depts) for adaptive trials. Rigorous analysis and knowledge-sharing guide evidence-driven scaling strategies.",
  },
  {
    title: "Varietal Deployment and Positioning",
    description:
      "Strategically introducing new, high-impact rice varieties in regions where they create the most benefit, using demand profiling and suitability analysis.",
  },
  {
    title: "Seed System Strengthening",
    description:
      "Driving awareness campaigns and enabling easier access to improved seeds while validating varietal performance through wide-scale adaptive trials.",
  },
  {
    title: "Market Research and Demand Creation",
    description:
      "Investigating consumer and value-chain needs to guide breeding and deployment of rice varieties that align with real-world markets.",
  },
  {
    title: "Knowledge Sharing and Extension",
    description:
      "Organizing interactive trainings, large-scale field demonstrations, and campaigns to enhance knowledge and awareness of improved rice technologies.",
  },
  {
    title: "Seed Business & Enterprise Development",
    description:
      "Supporting farmer collectives and small-scale enterprises to build successful seed businesses and robust rural economies.",
  },
];

const OurWorkTimeline = () => (
  <div className="bg-white min-h-screen py-10 px-2 md:px-0">
    <div className="max-w-4xl mx-auto text-center mb-12">
      {/* <h1 className="text-4xl md:text-5xl font-extrabold text-green-900 mb-4">Our Work</h1> */}
      <p className="text-lg text-gray-700 mb-8">
        Discover how we're transforming South Asia's rice sector—one breakthrough at a time.
      </p>
      <div className="flex justify-center mb-10">
        <img
          src={NetworkMap}
          alt="Network Coverage Map"
          className="w-full max-w-2xl rounded-xl shadow-lg border border-green-100"
        />
      </div>
    </div>
    <div className="relative border-l-4 border-green-200 max-w-3xl mx-auto">
      {workStreams.map((stream, idx) => (
        <div key={idx} className="mb-16 ml-8 relative group">
          {/* Timeline Dot */}
          <div className="absolute w-6 h-6 left-[-41px] top-2 flex items-center justify-center">
            <span className="block w-4 h-4 bg-green-700 rounded-full border-4 border-white shadow-lg transition group-hover:bg-green-800" />
          </div>
          {/* Timeline Content Card */}
          <div className="bg-green-50 hover:bg-green-100 rounded-2xl shadow-md px-6 py-6 transition">
            <h2 className="text-2xl font-semibold text-green-800 mb-2">{stream.title}</h2>
            <p className="text-gray-700">{stream.description}</p>
          </div>
        </div>
      ))}
    </div>
    {/* CTA */}
    <div className="text-center pt-16 pb-4 max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold text-green-800 mb-4">Ready to connect or partner?</h3>
      <a
        href="/contact"
        className="inline-block bg-green-700 hover:bg-green-800 text-white font-semibold py-3 px-10 rounded-full shadow-lg transition"
      >
        Contact Us
      </a>
    </div>
  </div>
);

export default OurWorkTimeline;
