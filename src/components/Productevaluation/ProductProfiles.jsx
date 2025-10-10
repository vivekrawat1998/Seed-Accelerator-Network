import React from "react";

// Replace this with your actual PDF list and file paths
const varietyProfiles = [
    { name: "Basmati 123", pdf: "/pdfs/basmati-123.pdf" },
    { name: "IR64", pdf: "/pdfs/ir64.pdf" },
    { name: "Swarna Sub1", pdf: "/pdfs/swarna-sub1.pdf" },
    { name: "Pusa 44", pdf: "/pdfs/pusa-44.pdf" },
    { name: "DRR Dhan 45", pdf: "/pdfs/drr-dhan-45.pdf" },
    { name: "Sharbati", pdf: "/pdfs/sharbati.pdf" }
];

export default function ProductProfiles() {
    return (
        <section className="bg-white rounded-xl  p-6 container  mx-auto my-10">
            <h2 className="md:text-3xl font-parkinsans text-lg font-bold mb-5  text-green-800 flex items-center">
                Product profiles—Variety wise
            </h2>
            <p className="text-gray-700 font-Nunito mb-6">Download detailed PDF profiles for each rice variety directly below.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {varietyProfiles.map(profile => (
                    <div key={profile.name} className="bg-green-50 rounded-lg shadow px-4 py-5 flex flex-col justify-between items-start">
                        <span className="font-semibold text-green-900 mb-2 text-lg">{profile.name}</span>
                        <a
                            href={profile.pdf}
                            download
                            className="mt-2 inline-block px-4 py-2 bg-green-800 text-white rounded hover:bg-green-700 shadow transition"
                        >
                            Download PDF
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}
