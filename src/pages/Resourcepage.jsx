import React, { useEffect } from "react";
import { FaRegFilePdf } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import ProfileSection from "../components/Profilesection";
import profileBg from '/resources.webp';

const resources = [
    {
        name: "Seed Accelerator 1.0 report",
        url: "/Seed Accelerator Report 1.0 2024.pdf",
    },
    {
        name: "Seed Accelerator 2.0 report",
        url: "/Seed Acclerator Report 2.0 2025.pdf",
    },
    {
        name: "Product Diary",
        url: "/Product Diary Final India.pdf"
    },
    {
        name: "Key Product Diary Rice",
        url: "/Key Product Diary Rice (Bangladesh).pdf"
    },
];

export default function ResourcesPage() {
    useEffect(() => {
        AOS.init({ duration: 800, once: true });
    }, []);

    return (
        <>
            <ProfileSection
                bgImage={profileBg}
                name="Resources"
                breadcrumbs={['Home', 'Resource']}
            />
            <div className="min-h-screen bg-white py-14 px-6 flex flex-col items-center">
                <h1 className="text-3xl font-extrabold font-parkinsans text-green-700 mb-2" data-aos="fade-down">
                    Resources
                </h1>
                <p className="text-gray-700 mb-8 font-Nunito text-lg text-center" data-aos="fade-up">
                    Download PDF reports, summaries, and guides below.
                </p>
                <div className="w-full max-w-2xl font-parkinsans grid gap-5">
                    {resources.map((res, idx) => (
                        <div
                            key={idx}
                            className="flex items-center justify-between p-5 border rounded-xl shadow-md bg-green-50 border-green-700"
                            data-aos="fade-up"
                            data-aos-delay={idx * 130}
                        >
                            <div className="flex items-center gap-4">
                                <FaRegFilePdf className="text-green-700 text-2xl" />
                                <span className="font-medium text-gray-900 text-lg">{res.name}</span>
                            </div>
                            <a
                                href={res.url}
                                download
                                className="bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-lg font-semibold transition duration-150"
                            >
                                Download
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
