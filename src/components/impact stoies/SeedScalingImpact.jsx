import React, { useState } from "react";
import seedDataByYear from "../../utils/Impactdata";

export default function SeedScalingDashboard() {
  const [selectedYear, setSelectedYear] = useState(seedDataByYear[0].year);
  const yearData = seedDataByYear.find((y) => y.year === selectedYear);

  // Columns for headings
  const columns = [
    { key: "variety", label: "Varieties" },
    ...yearData.stateKeys.map((k) => ({
      key: k,
      label: k.replace(/([A-Z])/g, " $1").replace(/^\w/, c => c.toUpperCase())
    }))
  ];

  // Processed row data
  const rows = yearData.data.map((row, i) => ({
    id: i,
    variety: row.variety || row.Varieties,
    ...yearData.stateKeys.reduce((acc, k) => {
      acc[k] = row[k] ?? "";
      return acc;
    }, {})
  }));

  return (
    <div className="container mx-auto mt-10  rounded-lg overflow-hidden ">
      {/* Heading */}
      <div className=" text-prime font-parkinsans  text-3xl font-semibold px-6 py-4">
        Seed Scaling Impact
      </div>
      <div className="px-6 py-2 border-b border-gray-100">
        <p className="text-base font-Nunito text-gray-700  mb-4">
          Dashboard on variety-wise and state-wise EGS linkage facilitated (2022-2025) seed quantity in Kg.
        </p>
        <div className="flex gap-2 flex-wrap mb-4">
          {seedDataByYear.map((yr) => (
            <button
              key={yr.year}
              className={`px-4 py-2 font-semibold rounded ${
                selectedYear === yr.year
                  ? "bg-[#116530] text-white"
                  : "bg-[#f3fcf7] text-[#0c8140] border border-[#0c8140]"
              }`}
              onClick={() => setSelectedYear(yr.year)}
            >
              {yr.year}
            </button>
          ))}
        </div>
      </div>
      {/* Table Section */}
      <div className="overflow-x-auto px-6 py-4">
        <div style={{ maxHeight: "60vh" }} className="overflow-y-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-[#116530] text-white sticky top-0 z-10">
                {columns.map(col => (
                  <th key={col.key} className="px-4 py-2 text-left font-semibold">
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => {
                const isGrandTotal = row.variety?.toLowerCase() === "grand total";
                return (
                  <tr
                    key={row.id}
                    className={
                      isGrandTotal
                        ? "bg-[#38a169] text-white font-bold"
                        : i % 2 === 0
                          ? "bg-white"
                          : "bg-[#f3fcf7]"
                    }
                  >
                    {columns.map(col => (
                      <td
                        key={col.key}
                        className={`px-4 py-2 ${isGrandTotal ? "font-bold" : ""}`}
                      >
                        {row[col.key] || ""}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
