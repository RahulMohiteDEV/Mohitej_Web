import React from 'react'
import {
  FaHeart,
  FaListUl,
  FaUtensils,
  FaBoxOpen,
  FaSmileBeam,
} from "react-icons/fa";

const steps = [
  {
    step: "01",
    title: "Feel the Craving",
    desc: "Browse our sweets & farsana and choose what makes you smile.",
    icon: <FaHeart />,
  },
  {
    step: "02",
    title: "Place Your Order",
    desc: "Call or WhatsApp us to place your order easily.",
    icon: <FaListUl />,
  },
  {
    step: "03",
    title: "Freshly Prepared",
    desc: "We prepare your order fresh with pure ingredients.",
    icon: <FaUtensils />,
  },
  {
    step: "04",
    title: "Packed with Care",
    desc: "Your order is packed hygienically to retain freshness.",
    icon: <FaBoxOpen />,
  },
  {
    step: "05",
    title: "Enjoy & Celebrate",
    desc: "Pickup or delivery — enjoy the taste with your loved ones.",
    icon: <FaSmileBeam />,
  },
];


const Order_process = () => {
  return (
   <section className="py-16 bg-gradient-to-b from-red-50 to-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-14">
          How Your Order Comes to Life
        </h2>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((item, index) => (
            <div
              key={index}
              className="relative bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition"
            >
              {/* Step Number */}
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-600 text-white text-sm font-bold px-4 py-1 rounded-full">
                Step {item.step}
              </span>

              {/* Icon */}
              <div className="text-4xl text-red-600 mb-4 flex justify-center">
                {item.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold transition">
            Order via WhatsApp
          </button>
        </div>

      </div>
    </section>
  )
}

export default Order_process
