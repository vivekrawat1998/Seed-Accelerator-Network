// File: WhyChooseUs.jsx
import React from "react";
import { FaLeaf, FaSeedling, FaTruck, FaAward } from "react-icons/fa";

export default function WhyChooseUs() {
    return (
        <div
            className="min-h-screen w-full relative flex flex-cols items-center"
            style={{
                backgroundImage: "url('/various-seeds-sesame-flax-seed-sunflower-seeds-pumpkin-seeds-salads.jpg')", // Make sure the image is in the public folder
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
            }}
        >

            <div className="w-full absolute inset-0 bg-black/65 h-screen"></div>
            <div className=" relative z-20 py-20 flex-grow">
                {/* Top Section */}
                <div className="flex flex-col  items-center  pt-20 pb-10 ">
                    {/* Why Choose Us Tag */}
                    <button className="flex items-center px-4 py-1 mb-4 rounded-full  border-white border text-white font-medium shadow-sm hover:bg-[#183025] transition">
                        <span className="mr-2">🐝</span>
                        Why Choose us
                    </button>

                    {/* Main Heading */}
                    <h1 className="text-4xl md:text-5xl font-parkinsans font-bold text-center text-white mb-4">
                        Pioneering Innovations in the
                        <br />
                        Global Agriculture
                    </h1>
                </div>

                {/* Cards Section */}
                <div className="flex flex-col md:flex-row justify-center gap-8 px-4">
                    <Card
                        icon={<FaLeaf size={40} className="text-white mx-auto" />}
                        title="100% Naturally"
                        desc="Quality Standards Services and offer expert guidance on"
                    />
                    <Card
                        icon={<FaSeedling size={40} className="text-white mx-auto" />}
                        title="High Processing"
                        desc="Quality Standards Services and offer expert guidance on"
                    />
                    <Card
                        icon={<FaTruck size={40} className="text-white mx-auto" />}
                        title="Home Delivery"
                        desc="Quality Standards Services and offer expert guidance on"
                    />
                    <Card
                        icon={<FaAward size={40} className="text-white mx-auto" />}
                        title="Best Quality"
                        desc="Quality Standards Services and offer expert guidance on"
                    />
                </div>
            </div>

        </div>
    );
}

function Card({ icon, title, desc }) {
    return (
        <div className="bg-[#1E3226] rounded-lg shadow-lg border-white border p-8 flex flex-col items-center w-full max-w-xs transition hover:scale-105">
            <div className=" grid place-items-center bg-[#0C7735] w-20 h-20 rounded-full p-2">
                {icon}
            </div>
            <h3 className="mt-4 text-xl font-parkinsans font-bold text-white">{title}</h3>
            <p className="mt-2 text-gray-300 font-Nunito text-center">{desc}</p>
        </div>
    );
}
