import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown, Facebook, Twitter, Youtube } from "lucide-react";

// Your navLinks (do NOT change)
const navLinks = [
    { name: "Home", href: "/" },
    { name: "About SAN", href: "/abouta" },
    { name: "Our Work", href: "/ourwork" },
    { name: "Member Network", href: "/network-members" },
    { name: "Product Evaluation", href: "/Product Evaluation" },
    { name: "Impact", href: "/impact" },
    { name: "Resources", href: "/Resources" },
    { name: "Contact us", href: "/contact" },
];

// Placeholder services array for dropdown example (mobile "Our Work" dropdown)
const services = [
    { name: "Service A", href: "/service/a", icon: <span className="mr-2 w-4 h-4 bg-green-600 rounded"></span> },
    { name: "Service B", href: "/service/b", icon: <span className="mr-2 w-4 h-4 bg-green-600 rounded"></span> },
];

const SocialIcons = () => (
    <div className="flex space-x-2">
        <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-[#122e18] flex items-center justify-center transition-colors duration-200">
            <Facebook size={20} className="text-white" />
        </a>
        <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-[#122e18] flex items-center justify-center transition-colors duration-200">
            <Twitter size={20} className="text-white" />
        </a>
        <a href="#" aria-label="Youtube" className="w-10 h-10 rounded-full bg-[#122e18] flex items-center justify-center transition-colors duration-200">
            <Youtube size={20} className="text-white" />
        </a>
    </div>
);

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <nav className="bg-prime  fixed w-full top-0  left-0 z-50 border-b border-gray-200 h-20">
            <div className="mx-auto max-w-[1600px]  flex justify-between items-center h-full px-4 md:px-2">
                {/* Left - Logo */}
                <Link to="/" className="flex items-center">
                    {/* Logo from image (SVG placeholder; replace if you have image) */}
                    <div className=" mr-2 flex items-center justify-center">
                        <img className="w-28 h-18" src="/logo seed.jpg" alt="" />
                    </div>
                </Link>

                {/* Center - NavLinks (hide on mobile) */}
                <ul className="hidden md:flex items-center space-x-8 font-medium text-base text-white h-full">
                    {navLinks.map(link => (
                        <li key={link.name} className="h-full flex items-center">
                            <Link
                                to={link.href}
                                className="flex items-center font-parkinsans h-full transition-colors duration-150 hover:text-green-200 px-1"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Right - Social Icons and CTA (hide on mobile) */}
                <div className="hidden md:flex items-center space-x-4 h-full">
                    <SocialIcons />
                    <button className="ml-4 bg-yellow-500 text-white cursor-pointer font-semibold text-md rounded py-2 px-10 transition-colors hover:bg-green-700">
                        Login
                    </button>
                </div>

                {/* Hamburger Menu Button (mobile only) */}
                <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-white focus:outline-none z-50">
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Dropdown */}
            {menuOpen && (
                <div className="md:hidden bg-white shadow-sm border-t absolute top-20 left-0 w-full">
                    <ul className="flex flex-col space-y-2 px-4 py-4 font-medium text-gray-800">
                        {navLinks.map(link => (
                            link.name === "Our Work" ? (
                                <li key={link.name}>
                                    <div
                                        onClick={() => setDropdownOpen(!dropdownOpen)}
                                        className="flex items-center justify-between py-2 hover:text-green-700 cursor-pointer"
                                    >
                                        <span>Our Work</span>
                                        <ChevronDown size={16} className={`ml-2 transition-transform ${dropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
                                    </div>
                                    {dropdownOpen &&
                                        <div className="flex flex-col pl-5 border-l mt-2">
                                            {services.map(service => (
                                                <Link
                                                    key={service.name}
                                                    to={service.href}
                                                    className="flex items-center py-1 text-sm hover:text-green-700"
                                                    onClick={() => { setMenuOpen(false); setDropdownOpen(false); }}
                                                >
                                                    {service.icon}
                                                    {service.name}
                                                </Link>
                                            ))}
                                        </div>
                                    }
                                </li>
                            ) : (
                                <li key={link.name}>
                                    <Link
                                        to={link.href}
                                        className="block py-2 px-2 hover:text-green-700 transition-colors duration-150"
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            )
                        ))}
                        <li className="mt-4">
                            <Link to="/quote" className="block bg-green-700 text-white text-center font-semibold text-base rounded py-3 transition-colors hover:bg-green-800"
                                onClick={() => setMenuOpen(false)}>
                                Get A Quote
                            </Link>
                        </li>
                    </ul>
                    <div className="flex justify-center py-4 border-t">
                        <SocialIcons />
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
