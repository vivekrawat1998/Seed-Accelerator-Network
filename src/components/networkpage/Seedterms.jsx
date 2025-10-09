import React from "react";

const SeedScalingTerms = () => (
    <section className="max-w-7xl mx-auto my-12 bg-white rounded-2xl  px-3 md:px-6 py-8">
        <h2 className="md:text-3xl text-md font-parkinsans font-extrabold text-green-800 mb-6 text-center">Seed Scaling Program: Terms & Conditions</h2>
        <ul className="list-disc pl-6 space-y-4 mb-8 text-gray-900">
            <li>
                <span className=" font-parkinsans font-semibold">Open and Voluntary Membership:</span>
                <ul className="list-disc font-Nunito pl-6 mt-1 space-y-2 text-gray-700">
                    <li>Membership open to individuals and organizations in seed systems (startups, FPO/FPC, private/public sector, NGOs, research institutions, etc.).</li>
                    <li>Participation is voluntary, no membership fee.</li>
                </ul>
            </li>
            <li>
                <span className="font-semibold font-parkinsans">Data Sharing for Seed Facilitation:</span>
                <ul className="list-disc font-Nunito pl-6 mt-1 space-y-2 text-gray-700">
                    <li>Institutions/groups sharing seed access must provide:
                        <ul className="list-disc pl-6 mt-1">
                            <li>Seed production data (crop, variety, quantity, location)</li>
                            <li>Sales data (volume sold, region, impact, beneficiaries)</li>
                        </ul>
                    </li>
                    <li>This supports transparency, planning, and collective impact assessment.</li>
                </ul>
            </li>
            <li>
                <span className=" font-parkinsans  font-semibold">No Royalty Liability on Listed Products:</span>
                <ul className="list-disc pl-6 mt-1 font-Nunito space-y-2 text-gray-700">
                    <li>No royalty charged by IRRI; terms by supplying institution if applicable.</li>
                    <li>Breeding lines are publicly available or by documented, legal route.</li>
                    <li>Follow national indent or direct request to relevant institution for special lines.</li>
                </ul>
            </li>
            <li>
                <span className="font-semibold font-parkinsans">IRRI Disclaimer & Liability:</span>
                <ul className="list-disc pl-6 mt-1 font-Nunito text-gray-700">
                    <li>IRRI isn’t liable for seed quality of supplied/outsourced product.</li>
                    <li>No responsibility for commercial transactions or any deviation by third parties.</li>
                    <li>Role is technical coordination and enabling wider use—not brokering transactions.</li>
                </ul>
            </li>
            <li>
                <span className="font-semibold font-parkinsans">Trade Name & Attribution Protocol:</span>
                <ul className="list-disc font-Nunito pl-6 mt-1 text-gray-700">
                    <li>Members must credit the original source for commercialized seeds (e.g., IRRI, ICAR, SAUs).</li>
                    <li>Non-compliance may face public scrutiny or reputational risk.</li>
                    <li>Changes in varietal name or developer removal are at the member's risk.</li>
                </ul>
            </li>
            <li>
                <span className="font-semibold font-parkinsans">Compliance with Seed Laws & Ethics:</span>
                <ul className="list-disc pl-6 mt-1 font-Nunito text-gray-700">
                    <li>Members must adhere to all national laws (Seed Act, PV&FR Act, etc.).</li>
                    <li>Certifications/quality checks as per latest regulations.</li>
                    <li>Commercialization must prioritize farmer benefit, local adaptation, and ethical practice.</li>
                </ul>
            </li>
            <li>
                <span className="font-semibold font-parkinsans">Collaboration over Competition:</span>
                <ul className="list-disc font-Nunito pl-6 mt-1 text-gray-700">
                    <li>Promote sharing of seed access rather than competition.</li>
                    <li>Support capacity building and training, technology sharing.</li>
                </ul>
            </li>
        </ul>
        <div className="bg-red-50 border-l-4 border-red-400 px-4 font-Nunito py-3 mb-4 text-sm text-red-800">
            <strong>Note:</strong> IRRI and the source institutions hold no responsibility for commercial transactions, seed quality, or non-attribution. All sharing is royalty-free unless otherwise noted; deviations or misattribution remain the responsibility of the scaling/commercializing party.
            <br />
            All data and impact must be reported as per agreement, and source credit must always be given.
        </div>
    </section>
);

export default SeedScalingTerms;
