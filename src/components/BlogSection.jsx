// File: BlogSection.jsx
import React from "react";
import { FaUser, FaCommentDots, FaArrowRight } from "react-icons/fa";

const blogs = [
    {
        image: "https://incitis-food.eu/wp-content/uploads/2024/08/hydroponic-salad-farm-grows-leafy-greens-using-soilless-system-nutrientrich-water-feeds-plants-768x768.jpg",
        author: "David Liam",
        comments: "03 Comment",
        title: "Reintroducing Food Production to Urban Environments",
        description: "",
    },
    {
        image: "https://www.marketresearchintellect.com/images/blogs/harvesting-efficiency-agricultural-irrigation-sensor-market-booms-with-innovation.webp",
        author: "David Liam",
        comments: "03 Comment",
        title: "Innovative Irrigation Solutions Shaping Farming's Future",
        description: "",
    },
    {
        image: "https://img-cdn.krishijagran.com/67418/remote_sensing_2.jpg",
        author: "David Liam",
        comments: "03 Comment",
        title: "How Agronomy Connects with Various Scientific Disciplines",
        description: "",
    },
];

export default function BlogSection() {
    return (
        <section className="w-full py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                {/* Top - Badge and Heading */}
                <div className="flex flex-wrap items-center justify-between mb-10 gap-y-4">
                    <div>
                        <button className="flex items-center px-4 py-1 mb-4 rounded-full bg-gray-100 text-[#149247] font-medium shadow-sm hover:bg-green-100 transition w-fit">
                            <span className="mr-2">🐝</span>Our Latest Blog
                        </button>
                        <h2 className="text-3xl md:text-4xl font-parkinsans font-bold text-[#173323] mb-2">
                            Recent Posts from Fresh
                            <br />
                            Agricultural Insights
                        </h2>
                    </div>
                    <div>
                        <button className="bg-[#149247] text-white font-semibold px-6 py-3 rounded-lg shadow hover:bg-[#37b86b] transition flex items-center gap-2">
                            View All Blogs
                            <span className="inline-block w-2 h-2 bg-yellow-400 rounded-full"></span>
                        </button>
                    </div>
                </div>
                {/* Blog Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {blogs.map((blog, idx) => (
                        <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow border border-[#F1F1E8] flex flex-col">
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="object-cover w-full h-60"
                            />
                            <div className="p-5 flex flex-col flex-1">
                                {/* Author + Comments */}
                                <div className="flex text-gray-500 text-sm gap-6 mb-2">
                                    <div className="flex items-center gap-2">
                                        <FaUser /> {blog.author}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <FaCommentDots /> {blog.comments}
                                    </div>
                                </div>
                                <h3 className="font-bold text-lg text-[#1b2e1c] mb-4">
                                    {blog.title}
                                </h3>
                                <div className="mt-auto">
                                    <button className="bg-[#0d2317] text-white p-3 rounded-full flex items-center justify-center transition hover:bg-[#149247]">
                                        <FaArrowRight />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
