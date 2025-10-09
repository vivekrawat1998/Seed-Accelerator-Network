import React from "react";
import DashboardStatsSection from "../components/networkpage/Dashboardoverview";
import NetworkMembersHero from "../components/networkpage/Networkmemberhero";
import CoolStatsTables from "../components/networkpage/Coolstatstable";
import RegistrationForm from "../components/networkpage/Registrationform";
import SeedScalingTerms from "../components/networkpage/Seedterms";

const san1Participants = [
  { id: 1, name: "Dr Avinash Umate", organization: "Assistant Breeder (Paddy), VNR Seeds Pvt. Ltd., Hyderabad, Telangana" },
  { id: 2, name: "Dr Girija Rani", organization: "Principal Scientist & Head-Plant Breeding, Agricultural Research Station, ANGRAU, Machilipatnam, Andhra Pradesh" },
  { id: 3, name: "Dr KC Sahoo", organization: "Director (Commercial), National Seeds Corporation, Delhi" },
  { id: 4, name: "Dr. Moushree Sakar", organization: "Head R&D, GMS Agritech Pvt. Ltd., Kolkata, West Bengal" },
  { id: 5, name: "Dr. N.P. Mandal", organization: "Principal Scientist-Plant Breeding, ICAR NRRI, CRURRS, Hazaribagh, Jharkhand" },
  { id: 6, name: "Dr. Saurabh Dixit", organization: "Senior Scientist (Plant Breeder), Crop Research Station, ANDUAT, Masodha, Uttar Pradesh" },
  { id: 7, name: "Dr. Sunil Naik", organization: "Crop Breeding Lead, Rallis India, Hyderabad, Telangana" },
  { id: 8, name: "Dr. Surinder Singh Bisht", organization: "Senior Plant Breeder, Bio Seeds Research India, Hyderabad, Telangana" },
  { id: 9, name: "Dr. T. Srinivas", organization: "Principal Scientist (Rice), Agricultural Research Station, ANGRAU, Bapatla, Andhra Pradesh" },
  { id: 10, name: "Dr. Umakant Verma", organization: "Project Manager-Rice Breeding, Bapna Seeds Pvt. Ltd., Raipur, Chhattisgarh" },
  // ...add remaining participants of SAN 1.0
];

const san2Participants = [
  { id: 1, name: "Dr. Pradip Dey", organization: "Director, ICAR ATARI, Kolkata (Zone-V)" },
  { id: 2, name: "Dr. H.C Bhattacharya", organization: "Scientific Consultant, ICAR ATARI Guwahati, Zone VI" },
  { id: 3, name: "Dr. Shantanu Kuar Dubey", organization: "Director, ICAR ATARI, Kanpur (Zone-IV)" },
  { id: 4, name: "Mr. Anuj Kumar Singh", organization: "Consultant, Uttar Pradesh Beej Vikas Nigam, Lucknow" },
  { id: 5, name: "Mr. Gunjanan Wallung Shyam", organization: "Asst. Branch Manager, Assam Seeds Corporation, Guwahati" },
  { id: 6, name: "Mr. Aditya Kumar Panda", organization: "DGM, Odisha State Seed Corporation" },
  { id: 7, name: "Dr. Prafull Lahane", organization: "GM, Quality Control, Mahabeej, Akola" },
  { id: 8, name: "Mr. Vivek Thakare", organization: "GM, Production, Mahabeej, Akola" },
  { id: 9, name: "Mr. Shardool Vikram Chaudhari", organization: "Director Production, Jaya seeds, Varanasi" },
  { id: 10, name: "Mr. Manoj Kumar", organization: "Functional Head, R S Seeds, Varanasi" },

];

const NetworkMembersFootprintsPage = () => (
<div className="bg-white to-slate-100 min-h-screen py-12 px-2 font-sans">


    <NetworkMembersHero />
    <DashboardStatsSection />
    <section className="max-w-6xl  mt-10 mx-auto mb-20 bg-white rounded-3xl ">
      <h2 className="md:text-5xl text-lg mb-10 font-bold text-green-800 mb-6 text-center font-parkinsans tracking-wide">SAN 1.0 Participants (2024)</h2>
      <div className="overflow-auto max-h-[500px]  rounded-md">
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead className="bg-prime text-white font-parkinsans  sticky top-0">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">S.No.</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Organization</th>
            </tr>
          </thead>
          <tbody>
            {san1Participants.map(({ id, name, organization }) => (
              <tr key={id} className={`odd:bg-green-50 font-Nunito even:bg-white`}>
                <td className="border border-gray-300 px-4 py-2">{id}.</td>
                <td className="border border-gray-300 px-4 py-2">{name}</td>
                <td className="border border-gray-300 px-4 py-2">{organization}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
    <section className="max-w-6xl mx-auto mb-20 bg-white rounded-3xl  ">
      <h2 className="md:text-5xl text-lg font-parkinsans mb-10 font-bold text-green-800 mb-6 text-center tracking-wide">SAN 2.0 Participants (2025)</h2>
      <div className="overflow-auto max-h-[500px] border border-green-300 rounded-md">
        <table className="w-full table-auto border-collapse border border-gray-300">
          <thead className="bg-prime  text-white font-parkinsans sticky top-0">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">S.No.</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
              <th className="border border-gray-300 px-4 py-2 text-left">Organization</th>
            </tr>
          </thead>
          <tbody>
            {san2Participants.map(({ id, name, organization }) => (
              <tr key={id} className={`odd:bg-green-50 font-Nunito even:bg-white`}>
                <td className="border border-gray-300 px-4 py-2">{id}.</td>
                <td className="border border-gray-300 px-4 py-2">{name}</td>
                <td className="border border-gray-300 px-4 py-2">{organization}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
    <CoolStatsTables />
    <RegistrationForm />
    <SeedScalingTerms />
  </div>
);

export default NetworkMembersFootprintsPage;
