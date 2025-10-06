import React from "react";
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import NetworkMap from '/our work.png';

const dashboard = [
  { label: "Regions Covered (2024)", value: "6" },
  { label: "Regions Covered (2025)", value: "5" },
  { label: "Organizations (2024)", value: "47" },
  { label: "Organizations (2025)", value: "27" },
  { label: "Seed Varieties (2024)", value: "32" },
  { label: "Seed Varieties (2025)", value: "22" },
  { label: "Licensing Facilitated", value: "Yes" },
];

const regionParticipation = [
  { name: "North India", value: 38 },
  { name: "South India", value: 28 },
  { name: "East India", value: 13 },
  { name: "West India", value: 4 },
  { name: "Central India", value: 2 },
  { name: "Northeast India", value: 5 },
];

const orgParticipation = [
  { name: "Private Seed Cos", value: 37 },
  { name: "Public Institutes", value: 19 },
  { name: "NGOs", value: 4 },
  { name: "State Gov Depts", value: 2 },
  { name: "National/State Org.", value: 9 },
  { name: "FPO/FPC", value: 20 },
];

const COLORS_REGION = ['#34D399', '#6EE7B7', '#A7F3D0', '#A3E635', '#22D3EE', '#5EEAD4'];
const COLORS_ORG = ['#FDE68A', '#BFDBFE', '#F0ABFC', '#FCD34D', '#F472B6', '#6366F1'];

const NetworkMembersPage = () => (
  <div className="bg-gradient-to-br from-green-50 to-slate-100 min-h-screen py-10 px-4">

    {/* HERO */}
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-5xl font-extrabold mb-2 bg-gradient-to-r from-green-700 via-green-500 to-emerald-500 text-transparent bg-clip-text">
        SAN Network Members
      </h1>
      <p className="text-xl text-gray-700 mb-6">
        Spanning India’s diverse ecosystems, fostering innovation through collaboration for resilient seed systems.
      </p>
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
          <div
            key={idx}
            className="bg-white rounded-xl shadow py-8 px-4 flex flex-col items-center hover:-translate-y-2 hover:bg-green-50 transition text-center cursor-default"
          >
            <div className="text-4xl font-extrabold text-green-700">{item.value}</div>
            <div className="text-gray-700 mt-2 text-sm font-medium">{item.label}</div>
          </div>
        ))}
      </div>
    </section>

    {/* PARTICIPATION GRAPHS */}
    <section className="max-w-5xl mx-auto md:flex gap-8 mb-12 px-3">
      <div className="flex-1 mb-10 md:mb-0 bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-bold text-green-800 mb-6 flex items-center gap-2">
          <span className="inline-block w-4 h-4 rounded-full bg-green-400"></span> By Region
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={regionParticipation} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <XAxis dataKey="name" stroke="#10B981" />
            <Tooltip />
            <Bar dataKey="value" fill="#34D399" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="flex-1 mb-10 md:mb-0 bg-white rounded-xl shadow p-6">
        <h2 className="text-2xl font-bold text-yellow-800 mb-6 flex items-center gap-2">
          <span className="inline-block w-4 h-4 rounded-full bg-yellow-400"></span> By Organization Type
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie 
              data={orgParticipation} 
              dataKey="value" 
              nameKey="name" 
              cx="50%" 
              cy="50%" 
              outerRadius={100} 
              fill="#FCD34D" 
              label
            >
              {orgParticipation.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS_ORG[index % COLORS_ORG.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </section>

    {/* FEATURED PARTICIPANTS */}
    {/* (Keep your existing layout here, optionally improve card styling as above) */}

    {/* TERMS & REGISTRATION */}
    {/* (Keep your form and terms styling as they are or add additional padding/margins) */}

    {/* CTA */}
    <div className="text-center mt-16">
      <h3 className="text-2xl font-bold text-green-800 mb-4">
        Want to join or partner with SAN?
      </h3>
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
