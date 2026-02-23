import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const categories = [
  {
    name: "Sweets",
    products: 32,
    image: "/images/Logo.png",
  },
  {
    name: "Namkeens",
    products: 28,
    image: "/images/mix_farsana1.png",
  },
  {
    name: "Chitale M²",
    products: 3,
    image: "/images/chitale.png",
  },
  {
    name: "Bingebar",
    products: 3,
    image: "/images/bingebar.png",
  },
  {
    name: "New Launches",
    products: 11,
    image: "/images/new.png",
  },
  {
    name: "Festival Combos",
    products: 1,
    image: "/images/festival.png",
  },
];

const bestSellers = [
  {
    name: "Kaju Katli",
    image: "./images/kaju_katli.png",
  },
  {
    name: "Motichoor Ladoo",
    image: "./images/ladoo.png",
  },
  {
    name: "Farsana Mix",
    image: "./images/mix_farsana.png",
  },
  {
    name: "Chakli",
    image: "./images/chakli.png",
  },
    {
    name: "Motichoor Ladoo",
    image: "./images/ladoo.png",
  },
  {
    name: "Farsana Mix",
    image: "./images/mix_farsana.png",
  },
  {
    name: "Chakli",
    image: "./images/chakli.png",
  },
];

const Categories = () => {
  return (
    <>
    <section className="py-14 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        
        <h2 className="text-3xl font-semibold mb-10">
          Popular Categories
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl shadow-md p-6 flex items-center justify-between hover:shadow-xl transition"
            >
              {/* Left Content */}
              <div>
                <h3 className="text-xl font-semibold mb-2">
                  {cat.name}
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                  {cat.products} Products
                </p>

                <button className="flex items-center text-red-600 font-medium hover:underline">
                  Shop Now
                  <span className="ml-2 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    ›
                  </span>
                </button>
              </div>

              {/* Right Image */}
              <div className="w-40 h-32 flex items-center justify-center">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>

  
              {/* Best Sellers */}
    <section className="py-14 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4">

    <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
      Best Sellers
    </h2>

<Swiper
  modules={[Navigation, Pagination, Autoplay]}
  navigation
  pagination={{ clickable: true }}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  spaceBetween={24}
  slidesPerView={1}
  breakpoints={{
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 4 },
  }}
>
      {bestSellers.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="bg-white  rounded-xl p-5 text-center 
                          hover:shadow-2xl transition-all duration-500 
                          hover:-translate-y-2 group">

            {/* Image */}
            <div className="w-full h-44 flex items-center justify-center overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="h-full object-contain transition-transform duration-500 group-hover:scale-120"
              />
            </div>

            {/* Name */}
            <h3 className="mt-4 text-lg font-semibold transition duration-300 group-hover:text-red-600">
              {item.name}
            </h3>

            {/* Badge */}
            <span className="inline-block mt-2 text-xs bg-red-100 text-red-600 px-3 py-1 rounded-full font-semibold animate-pulse">
              ★ Best Seller
            </span>

            {/* Button */}
            <button className="mt-5 w-full bg-red-600 text-white py-2 rounded-full 
                               hover:bg-red-700 transition-all duration-300 
                               hover:scale-105">
              Order Now
            </button>

          </div>
        </SwiperSlide>
      ))}
    </Swiper>

  </div>
</section>
      </>
  );
};

export default Categories;