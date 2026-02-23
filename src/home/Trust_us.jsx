import React from "react";
import { FaLeaf, FaStar, FaHandsWash, FaUsers, FaGift } from "react-icons/fa";

const trustPoints = [
  {
    icon: <FaLeaf />,
    title: "Pure Ingredients",
    desc: "We use pure desi ghee and premium quality ingredients.",
  },
  {
    icon: <FaHandsWash />,
    title: "Hygienic Preparation",
    desc: "Prepared daily with strict hygiene standards.",
  },
  {
    icon: <FaStar />,
    title: "Authentic Taste",
    desc: "Traditional recipes with unforgettable taste.",
  },
  {
    icon: <FaUsers />,
    title: "Trusted by Families",
    desc: "Loved and trusted by generations of customers.",
  },
  {
    icon: <FaGift />,
    title: "Perfect for Celebrations",
    desc: "Ideal for festivals, weddings & special occasions.",
  },
];

const Trust_us = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-3xl font-semibold text-center mb-14">
          Why People Trust Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {trustPoints.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 text-center 
                         shadow-sm hover:shadow-xl 
                         transition-all duration-500 
                         hover:-translate-y-3 border border-transparent 
                         hover:border-red-100"
            >
              {/* Icon Circle */}
              <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center 
                              rounded-full bg-red-50 text-red-600 text-3xl
                              transition duration-500 group-hover:scale-110 group-hover:rotate-6">
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold mb-3 group-hover:text-red-600 transition">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Trust_us;