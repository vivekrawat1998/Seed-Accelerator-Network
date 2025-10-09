import React from "react";

const multiYearSummary = [
    {
        year: 2022,
        segments: 5,
        states: 7,
        trials: 632,
        testVarieties: 26,
        benchmarkVarieties: 8,
        naresPartners: 17
    },
    {
        year: 2023,
        segments: 5,
        states: 7,
        trials: 453,
        testVarieties: 74,
        benchmarkVarieties: 24,
        naresPartners: 21
    },
    {
        year: 2024,
        segments: 5,
        states: 4,
        trials: 180,
        testVarieties: 31,
        benchmarkVarieties: 8,
        naresPartners: 8
    }
];

const stateDistricts = [
    { state: "Bihar", districts: "Banka, Jehanabad, Patna, Rohtas" },
    { state: "Chhattisgarh", districts: "Bilaspur, Durg, Kabeerdham, Mahasamund, Raipur" },
    { state: "Jharkhand", districts: "Garhwa, Palamu" },
    { state: "Odisha", districts: "Bargarh, Ganjam, Khordha, Puri, Sundargarh, Sambalpur" },
    { state: "Telangana", districts: "Karimnagar, Warangal, Nalgonda, Mahbubnagar" },
    { state: "Uttar Pradesh", districts: "Chandauli, Ghazipur, Gorakhpur, Kaushambi, Kushinagar, Prayagraj, Siddharth Nagar, Varanasi" },
    { state: "West Bengal", districts: "Bankura, Cooch Behar, Hooghly, Howrah, Jalpaiguri, Nadia" }
];

export default function StatisticalAnalysisSection() {
    return (
        <section className="bg-white rounded-lg  px-4 py-8 container mx-auto my-10">
            <h2 className="text-2xl font-bold mb-5 text-green-800">Statistical Analysis</h2>
            <p className="mb-3 text-gray-700">
                Quantitative traits were analyzed using a Mixed Linear Model (BLUP). Trial reliability was evaluated through broad-sense heritability (<span className="italic">H<sup>2</sup></span>) and coefficient of determination (<span className="italic">R<sup>2</sup></span>). Predicted values for each variable were tested for significance at the 95% confidence level.
            </p>

            <h3 className="text-lg font-semibold mb-3 text-green-700">Map – States and Market Segments</h3>

            <h4 className="text-md font-semibold mb-2 text-green-700">Multi-Year OFT Summary</h4>
            <div className="overflow-x-auto mb-6">
                <table className="min-w-full divide-y divide-gray-200 bg-white rounded shadow">
                    <thead className="bg-green-200">
                        <tr>
                            <th className="px-3 py-2 text-md font-bold text-green-900">Year</th>
                            <th className="px-3 py-2 text-md font-bold text-green-900">Market Segments</th>
                            <th className="px-3 py-2 text-md font-bold text-green-900">States</th>
                            <th className="px-3 py-2 text-md font-bold text-green-900">No. Of Trials</th>
                            <th className="px-3 py-2 text-md font-bold text-green-900">Test Varieties</th>
                            <th className="px-3 py-2 text-md font-bold text-green-900">Benchmark k Varieties</th>
                            <th className="px-3 py-2 text-md font-bold text-green-900">NARES Partners</th>
                        </tr>
                    </thead>
                    <tbody>
                        {multiYearSummary.map((row) => (
                            <tr key={row.year} className="odd:bg-green-50 even:bg-white">
                                <td className="px-3 py-2">{row.year}</td>
                                <td className="px-3 py-2">{row.segments}</td>
                                <td className="px-3 py-2">{row.states}</td>
                                <td className="px-3 py-2">{row.trials}</td>
                                <td className="px-3 py-2">{row.testVarieties}</td>
                                <td className="px-3 py-2">{row.benchmarkVarieties}</td>
                                <td className="px-3 py-2">{row.naresPartners}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* State/Districts summary table */}
            <h4 className="text-md font-semibold my-2 mb-3 text-green-700">State / Districts</h4>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 bg-white rounded shadow text-left">
                    <thead>
                        <tr className="bg-green-200">
                            <th className="px-3 py-2 text-md font-bold text-green-900">State</th>
                            <th className="px-3 py-2 text-md font-bold text-green-900">Districts</th>
                        </tr>
                    </thead>
                    <tbody>
                        {stateDistricts.map(({ state, districts }) => (
                            <tr key={state} className="odd:bg-green-50 even:bg-white">
                                <td className="px-3 py-2 font-medium text-green-900">{state}</td>
                                <td className="px-3 py-2">{districts}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
}
