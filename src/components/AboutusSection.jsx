import React from "react";

// Dummy media image URLs, replace with your files
const mainImg = '/SAM_3.JPG';


const AboutSection = () => (
  <section className=" container mx-auto py-10 md:py-20 px-4 flex flex-col md:flex-row items-center justify-center bg-white">
    {/* Left Media Block */}
    <div className="relative w-full md:w-[500px] max-w-[700px] min-h-[420px] flex flex-col items-center justify-center mb-8 md:mb-0">
      {/* Main farmer image */}
      <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-md">
        <img src={mainImg} alt="SAN Farmer" className="object-cover w-full h-full" />
      </div>
     
      <div className="absolute top-[85px] right-[-10px] w-1 h-28 bg-yellow-400 rounded-xl"></div>
      
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
          <div className="bg-green-100 p-2 rounded-full mr-5 flex items-center justify-center">
           <img src="/100-percent-removebg-preview.png" className="w-10 h-10 object-contain" />
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
          <div className="bg-green-100 p-2 rounded-full mr-5 flex items-center justify-center">
            <img src="/light-bulb-removebg-preview.png" alt="" className="w-10 h-10 object-contain" />
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
          <img src="/phone.png" alt="Phone Icon" className="w-12 h-12 object-contain" />
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
