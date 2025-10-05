import React from "react";

// Dummy media image URLs, replace with your files
const mainImg = '/SAM_3.JPG';
const badgeImg = '/images/san-badge.png';
const secondaryImg = '/images/san-crop.jpg';

const AboutSection = () => (
  <section className=" container mx-auto py-10 md:py-20 px-4 flex flex-col md:flex-row items-center justify-center bg-white">
    {/* Left Media Block */}
    <div className="relative w-full md:w-[500px] max-w-[700px] min-h-[420px] flex flex-col items-center justify-center mb-8 md:mb-0">
      {/* Main farmer image */}
      <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-md">
        <img src={mainImg} alt="SAN Farmer" className="object-cover w-full h-full" />
      </div>
      {/* Experience badge overlay */}
      {/* <div className="absolute top-8 left-0 bg-green-700 text-white px-7 py-7 rounded-bl-xl rounded-tr-xl flex flex-col items-center shadow-lg"
        style={{ minWidth: 150 }}>
        <img src={badgeImg} alt="5 Years Experience" className="w-12 mb-2" />
        <div className="font-semibold text-lg">5 Years</div>
        <div className="text-xs font-medium">Working Experience</div>
      </div> */}
      {/* Corner yellow border accent */}
      <div className="absolute top-[85px] right-[-10px] w-1 h-28 bg-yellow-400 rounded-xl"></div>
      {/* Small video/side crop image + play button overlayed bottom right */}
      {/* <div className="absolute bottom-[-10px] left-[260px] w-32 h-32 rounded-xl overflow-hidden shadow-lg border-4 border-white">
        <img src={secondaryImg} alt="SAN Crop" className="object-cover w-full h-full" />
        <button className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-20">
          <span className="bg-yellow-400 rounded-full w-9 h-9 flex items-center justify-center text-white font-bold shadow-lg">▶</span>
        </button>
      </div> */}
    </div>

    {/* Right Text Block */}
    <div className="w-full md:w-2/3 max-w-2xl md:pl-12 flex flex-col justify-start">
      {/* Pill label */}
      <span className="inline-block bg-yellow-400 text-white px-5 py-2 mb-4 rounded-full w-[100px] font-medium text-sm shadow">
        About us
      </span>
      {/* Headline */}
      <h2 className="text-3xl md:text-4xl font-parkinsans font-bold text-gray-900 mb-5 leading-snug">
        About Seed Accelerator Network
      </h2>
      {/* Descriptive paragraph */}
      <p className="mb-5 text-gray-700 font-Nunito text-md">
        The Seed Accelerator Network (SAN) is an institutional platform conceptualized under the Seed Systems and Product Management (SSPM) unit at IRRI to strengthen the adaptive and confirmatory testing, scaling, delivery, and adoption of improved and newer rice varieties across South Asia emerging from diverse breeding pipelines and targeted at priority market segments.
        {/* <br /><br />
        This welcomes voluntary participation and onboarding of diverse seed scaling and commercializing institutions—primarily from private sector, public seed corporations, and large farmer producer companies—and connects them with diverse national rice breeding pipeline leads and nodal institutions.
        <br /><br /> */}
        SAN was initiated in recognition of persistent challenges in varietal turnover, seed replacement, and dissemination of newly released and primarily public-bred varieties, which often fail to reach their ultimate potential—and farmers—in a timely and effective manner.
      </p>
      {/* Features */}
      <div className="mb-5">
        <div className="flex flex-row items-center mb-4">
          <div className="bg-green-100 p-4 rounded-full mr-5 flex items-center justify-center">
            <svg width={32} height={32} fill="currentColor" className="text-green-700">
              <circle cx="16" cy="16" r="16" fill="#D1FAE5" />
              <path d="M10 16l4 4 8-8" stroke="#065F46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <span className="font-bold text-gray-900 text-lg">100% Quality Product</span>
            <div className="text-gray-700 text-sm">
              Delivering premium products with uncompromised quality ensuring customer satisfaction and trust in every step.
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="flex flex-row items-center mb-3">
          <div className="bg-green-100 p-4 rounded-full mr-5 flex items-center justify-center">
            <svg width={32} height={32} fill="currentColor" className="text-green-700">
              {/* Lightbulb icon */}
              <path d="M16 8a6 6 0 0 1 6 6c0 3-3 6-6 6s-6-3-6-6a6 6 0 0 1 6-6zm0 12v2" stroke="#065F46" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <span className="font-bold text-gray-900 text-lg">Get Professional Advice</span>
            <div className="text-gray-700 text-sm">
              Discover sustainable farming methods and technology innovations that boost productivity while tackling market pressures.
            </div>
          </div>
        </div>
      </div>
      {/* CTA Button and Contact */}
      <div className="flex flex-row items-center mt-4 gap-6">
        <a href="#discover" className="bg-green-700 text-white font-semibold px-7 py-3 rounded-lg shadow hover:bg-green-800 transition">
          Discover More
        </a>
        <div className="flex items-center gap-3">
          <svg width={32} height={32} fill="none" stroke="#065F46" strokeWidth="2" className="font-bold">
            {/* Phone handle */}
            <path d="M11 16c2.5 3.5 5.5 3.5 8 0M20 12v2m-8-2v2" stroke="#065F46" strokeWidth="1.5" />
          </svg>
          <div>
            <span className="block text-gray-900 font-bold text-md">Call us Now</span>
            <span className="block text-gray-800 text-sm">01(232)775–846</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
