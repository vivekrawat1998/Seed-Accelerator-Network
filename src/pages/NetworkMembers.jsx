import React from "react";
import NetworkMap from '/our work.png';

// Dashboard summary data
const dashboard = [
  { label: "Regions Covered (2024)", value: "6" },
  { label: "Regions Covered (2025)", value: "5" },
  { label: "Organizations (2024)", value: "47" },
  { label: "Organizations (2025)", value: "27" },
  { label: "Seed Varieties (2024)", value: "32" },
  { label: "Seed Varieties (2025)", value: "22" },
  { label: "Licensing Facilitated", value: "Yes" },
];

// Region badges colors
const regionColors = [
  "bg-green-200 text-green-800",
  "bg-green-100 text-green-900",
  "bg-emerald-100 text-emerald-900",
  "bg-lime-100 text-lime-900",
  "bg-teal-100 text-teal-900",
  "bg-cyan-100 text-cyan-900",
];
// Type badges colors
const orgColors = [
  "bg-yellow-100 text-yellow-800",
  "bg-blue-100 text-blue-800",
  "bg-fuchsia-100 text-fuchsia-800",
  "bg-amber-100 text-amber-900",
  "bg-pink-100 text-pink-900",
  "bg-indigo-100 text-indigo-900",
];

const regionParticipation = [
  ["North India", 38, "41.76%"],
  ["South India", 28, "30.77%"],
  ["East India", 13, "14.29%"],
  ["West India", 4, "4.40%"],
  ["Central India", 2, "2.20%"],
  ["Northeast India", 5, "6.59%"],
];

const orgParticipation = [
  ["Private Seed Cos", 37, "40.66%"],
  ["Public Institutes", 19, "20.88%"],
  ["NGOs", 4, "4.40%"],
  ["State Gov Depts", 2, "2.20%"],
  ["National/State Org.", 9, "9.89%"],
  ["FPO/FPC", 20, "21.98%"],
];

// Members list (add more as needed)
const seedAcceleratorMembers10 = [
  { name: "Dr Avinash Umate", org: "Assistant Breeder Paddy, VNR Seeds Pvt. Ltd., Hyderabad, Telangana" },
  { name: "Dr Girija Rani", org: "Principal Scientist Head-Plant Breeding, Agricultural Research Station, ANGRAU, AP" },
  { name: "Dr KC Sahoo", org: "Director Commercial, National Seeds Corporation, Delhi" },
];
const seedAcceleratorMembers20 = [
  { name: "Dr Pradip Dey", org: "Director, ICAR ATARI, Kolkata Zone-V" },
  { name: "Dr HC Bhattacharya", org: "Scientific Consultant, ICAR ATARI Guwahati, Zone VI" },
  { name: "Dr Shantanu Kuar Dubey", org: "Director, ICAR ATARI, Kanpur Zone-IV" },
];

const keyTerms = [
  "Open & voluntary membership; no fee.",
  "Data sharing required for seed facilitation (production & sales).",
  "No royalty applicable for public varieties.",
  "IRRI not liable for seed quality; transact directly with source.",
  "Attribution required to original breeder/institution (trade name rules).",
  "Follow national seed laws, ethical practices, and focus on benefit to farmers.",
  "Collaboration and knowledge sharing encouraged.",
];

const aNetworkMembersPage = () => (
  <div className="bg-gradient-to-br from-green-50 to-slate-100 min-h-screen py-10">

    {/* HERO */}
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-5xl font-extrabold mb-2 bg-gradient-to-r from-green-700 via-green-500 to-emerald-500 text-transparent bg-clip-text">SAN Network Members</h1>
      <p className="text-xl text-gray-700 mb-6">Spanning India’s diverse ecosystems, fostering innovation through collaboration for resilient seed systems.</p>
    </div>

    {/* MAP VISUAL */}
    <div className="flex justify-center my-8">
      <img
        src={NetworkMap}
        alt="SAN Coverage Map"
        className="rounded-2xl shadow-2xl ring-2 ring-green-100 w-full max-w-[600px]"
      />
    </div>

    {/* DASHBOARD */}
    <section className="max-w-5xl mx-auto mb-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {dashboard.map((item, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow py-8 px-2 flex flex-col items-center hover:-translate-y-2 hover:bg-green-50 transition text-center">
            <div className="text-4xl font-extrabold text-green-700">{item.value}</div>
            <div className="text-gray-700 mt-2 text-sm font-medium">{item.label}</div>
          </div>
        ))}
      </div>
    </section>

    {/* PARTICIPATION */}
    <section className="max-w-5xl mx-auto md:flex gap-8 mb-12 px-3">
      <div className="flex-1 mb-10 md:mb-0">
        <h2 className="text-2xl font-bold text-green-800 mb-4 flex items-center gap-2">
          <span className="inline-block w-4 h-4 rounded-full bg-green-400"></span>
          By Region
        </h2>
        <ul className="space-y-3">
          {regionParticipation.map(([region, number, share], i) => (
            <li key={region} className={`rounded-lg px-5 py-3 flex justify-between items-center shadow ${regionColors[i % regionColors.length]}`}>
              <span>{region}</span>
              <span className="font-bold">{number} <span className="ml-2 text-xs">({share})</span></span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex-1 mb-10 md:mb-0">
        <h2 className="text-2xl font-bold text-green-800 mb-4 flex items-center gap-2">
          <span className="inline-block w-4 h-4 rounded-full bg-yellow-400"></span>
          By Organization Type
        </h2>
        <ul className="space-y-3">
          {orgParticipation.map(([type, number, share], i) => (
            <li key={type} className={`rounded-lg px-5 py-3 flex justify-between items-center shadow ${orgColors[i % orgColors.length]}`}>
              <span>{type}</span>
              <span className="font-bold">{number} <span className="ml-2 text-xs">({share})</span></span>
            </li>
          ))}
        </ul>
      </div>
    </section>

    {/* FEATURED PARTICIPANTS */}
    <section className="max-w-5xl mx-auto my-10 px-3">
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="inline-block w-3 h-3 bg-green-500 rounded-full"></span>
            Key Members – Meet 1.0
          </h3>
          <div className="bg-white rounded-xl shadow p-5 space-y-5">
            {seedAcceleratorMembers10.map((m, i) => (
              <div key={i} className="border-l-4 pl-3 border-green-500">
                <div className="font-semibold text-green-800">{m.name}</div>
                <div className="text-sm text-gray-600">{m.org}</div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <span className="inline-block w-3 h-3 bg-emerald-500 rounded-full"></span>
            Key Members – Meet 2.0
          </h3>
          <div className="bg-white rounded-xl shadow p-5 space-y-5">
            {seedAcceleratorMembers20.map((m, i) => (
              <div key={i} className="border-l-4 pl-3 border-emerald-500">
                <div className="font-semibold text-emerald-800">{m.name}</div>
                <div className="text-sm text-gray-600">{m.org}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* TERMS & REGISTRATION */}
    <section className="max-w-3xl mx-auto my-14 px-3">
      <h2 className="text-2xl font-bold mb-5 text-green-900">Membership & Participation</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="font-bold mb-3 text-green-700">Key Membership Terms</h3>
          <ul className="list-inside list-disc mb-5 text-gray-700 space-y-2">
            {keyTerms.map((t, i) => (
              <li key={i}><span className="font-semibold text-green-700 mr-1">•</span>{t}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-3 text-green-700">Sample Registration</h3>
          <div className="bg-gradient-to-r from-green-100 via-white to-green-50 rounded-xl p-5 shadow">
            <form className="space-y-3">
              <input className="border border-green-200 rounded px-3 py-2 w-full" placeholder="Full Name" />
              <input className="border border-green-200 rounded px-3 py-2 w-full" placeholder="Designation" />
              <input className="border border-green-200 rounded px-3 py-2 w-full" placeholder="Email" />
              <input className="border border-green-200 rounded px-3 py-2 w-full" placeholder="Mobile Number" />
              <input className="border border-green-200 rounded px-3 py-2 w-full" placeholder="Organization Name" />
              <select className="border border-green-200 rounded px-3 py-2 w-full">
                <option>Type of Organization</option>
                <option>FPO/FPC</option>
                <option>NGO</option>
                <option>ICAR Institute</option>
                <option>University</option>
                <option>State Seed Organization</option>
                <option>State Certification Agency</option>
                <option>Private Company</option>
                <option>Individual Farmer</option>
                <option>Other</option>
              </select>
              <input className="border border-green-200 rounded px-3 py-2 w-full" placeholder="State" />
              <input className="border border-green-200 rounded px-3 py-2 w-full" placeholder="District" />
              <button className="w-full mt-2 bg-green-600 hover:bg-green-700 text-white rounded py-2 font-bold transition">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <div className="text-center mt-16">
      <h3 className="text-2xl font-bold text-green-800 mb-4">Want to join or partner with SAN?</h3>
      <a
        href="/contact"
        className="inline-block bg-gradient-to-r from-green-500 to-green-700 hover:from-green-700 hover:to-green-900 text-white font-semibold py-3 px-10 rounded-full shadow-lg transition"
      >
        Contact Us
      </a>
    </div>
  </div>
);

export default NetworkMembersPage;
