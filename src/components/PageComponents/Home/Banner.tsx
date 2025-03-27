"use client";

import Image from "next/image";
import React from "react";
import appleVision from "@/assets/Banner/vision-pro.jpg";
import laptop from "@/assets/Banner/laptop.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Banner() {
  const bannerContent = [
    {
      id: 1,
      img: appleVision,
      title: "Explore the Future",
      description: "Discover cutting-edge tech that elevate your lifestyle.",
    },
    {
      id: 2,
      img: laptop,
      title: "The Power Store",
      description: "Want some power ? Here we will give you all.",
    },
  ];

  return (
    <section>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2000,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {bannerContent.map((content) => (
          <SwiperSlide key={content.id}>
            <figure className="relative">
              <Image
                src={content.img}
                alt="banner"
                className="w-full h-[550px] object-cover"
              />
              <div className="transparent-layer overlay-bg absolute w-full h-full top-0 text-white">
                <div className="h-full w-full flex flex-col justify-center items-center">
                  <h1 className="text-4xl font-bold sm:text-6xl">
                    {content.title}
                  </h1>
                  <p className="mt-4 text-lg sm:text-xl">
                    {content.description}
                  </p>
                </div>
              </div>
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
