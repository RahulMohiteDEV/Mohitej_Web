import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



const MainContent = () => {

  const slides = [
    {
      image:
        "./images/main_img.png",
      title: "Fresh Indian Sweets",
      desc: "Ladoo, Barfi, Jalebi & more",
    },
    {
      image:
        "./images/all_products_bowl1.png",
      title: "Crispy Farasana",
      desc: "Fafda, Gathiya, Sev, Chivda",
    },
    {
      image:
        "./images/mix_farsana1.png",
      title: "Festival Specials",
      desc: "Diwali & Wedding Orders",
    },
  ];

  return (
    <div className="w-full h-[260px] sm:h-[360px] md:h-[460px] lg:h-[560px] ">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="h-full"

      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className='h-full'>
            <div className="relative w-full h-full">
              {/* Image */}

              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-contain "
              />

              {/* Overlay Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
                <h2 className="text-3xl md:text-4xl font-bold">
                  {slide.title}
                </h2>
                <p className="mt-3 text-lg md:text-xl">
                  {slide.desc}
                </p>

                <button className="mt-6 bg-red-600 hover:bg-red-700 px-6 py-2 rounded-full font-semibold">
                  Order Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
        
    </div>
   
  
  );
}


export default MainContent


