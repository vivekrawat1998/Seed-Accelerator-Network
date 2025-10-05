import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPinterestP, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const FooterSection = () => (
    <footer className="bg-transparent">

        {/* Footer */}
        <div className="w-full pt-32 pb-12 bg-prime font-Nunito text-gray-100">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-14 px-4">
                {/* Logo & About */}
                <div className="flex-1 min-w-[230px]">
                    <div className="flex items-center gap-2 mb-4">
                       <img  className="w-32 h-20 object-cover"  src="/logo seed.jpg" alt=""   />
                    </div>
                    <p className="mb-5 text-gray-300 text-sm">
                        Leading sustainable agriculture with innovative solutions for efficient, eco-friendly farming practices.
                    </p>
                    <div className="flex gap-3 text-xl">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaLinkedinIn /></a>
                    </div>
                </div>
                {/* Links Column */}
                <div className="flex-1 min-w-[150px]">
                    <h4 className="text-white text-lg font-semibold font-parkinsans mb-4">Our Link</h4>
                    <ul className="space-y-2 text-gray-200 text-sm">
                        <li><a href="#">About SAN</a></li>
                        <li><a href="#">Our Work</a></li>
                        <li><a href="#">Member Network</a></li>
                        <li><a href="#">Product Evaluation</a></li>
                        <li><a href="#">Impact</a></li>
                        <li><a href="#">Resources</a></li>
                    </ul>
                </div>
                {/* Address Column */}
                <div className="flex-1 min-w-[200px]">
                    <h4 className="text-white text-lg font-semibold font-parkinsans mb-4">Address</h4>
                    <div className="mb-4 flex items-start gap-3 text-sm">
                        <FaMapMarkerAlt className="text-yellow-300 mt-1" />
                        <div>
                            <span className="font-bold">Location</span><br />
                            11 Wall Street, New York, NY
                        </div>
                    </div>
                    <div className="mb-4 flex items-start gap-3 text-sm">
                        <FaEnvelope className="text-yellow-300 mt-1" />
                        <div>
                            <span className="font-bold">Email</span><br />
                            Info@valiadagrickor.com
                        </div>
                    </div>
                    <div className="flex items-start gap-3 text-sm">
                        <FaPhoneAlt className="text-yellow-300 mt-1" />
                        <div>
                            <span className="font-bold">Location</span><br />
                            +123 76599854
                        </div>
                    </div>
                </div>
                {/* News Column */}
                <div className="flex-1 min-w-[200px]">
                    <h4 className="text-white text-lg font-semibold font-parkinsans mb-4">Recent Blogs</h4>
                    <div className="mb-4 flex items-start gap-3">
                        <img src="/images/news1.jpg" alt="News" className="w-12 h-12 rounded-lg object-cover" />
                        <div>
                            <span className="block text-yellow-400 text-xs mb-1">July 14, 2025</span>
                            <span className="font-bold text-sm leading-tight text-white">Current Trends in our new Agriculture Solution</span>
                        </div>
                    </div>
                    <div className="flex items-start gap-3">
                        <img src="/images/news2.jpg" alt="News" className="w-12 h-12 rounded-lg object-cover" />
                        <div>
                            <span className="block text-yellow-400 text-xs mb-1">July 14, 2025</span>
                            <span className="font-bold text-sm leading-tight text-white">Recent Developments in New Farming Idea</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer bottom bar */}
            <div className="pt-8 mt-8 border-t border-green-900 text-center text-sm text-gray-300 flex flex-col md:flex-row items-center justify-between px-6">
                <span>
                    © 2025 All rights reserved by IRRI
                </span>
                <div className="flex gap-4 mt-3 md:mt-0">
                    <a href="#">Privacy Policy</a>
                    <span className="text-yellow-400">•</span>
                    <a href="#">Terms & Condition</a>
                    <span className="text-yellow-400">•</span>
                    <a href="#">Legal</a>
                </div>
            </div>
        </div>
    </footer>
);

export default FooterSection;
