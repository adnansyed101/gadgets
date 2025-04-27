"use client";

import laptop from "@/assets/banner/macbook.png";
import headphone from "@/assets/banner/headphone.png";
import speaker from "@/assets/banner/speaker.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Slide from "./Slide";

export default function Banner() {
  const bannerContent = [
    {
      id: 1,
      image: laptop,
      subtitle: "Explore Mac Accessories.",
      title: "Explore the Future",
    },
    {
      id: 2,
      image: headphone,
      title: "Stainless Steel AI Headphones.",
      subtitle: "Exclusive 20% Off",
    },
    {
      id: 3,
      image: speaker,
      title: "Explore options for Audiophiles.",
      subtitle: "Exclusive 20% Off",
    },
  ];

  return (
    <section className="mt-5 bg-[url(/banner/sprinkle.svg)]">
      <Swiper
        direction={"horizontal"}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {bannerContent.map((content) => (
          <SwiperSlide key={content.id}>
            <Slide content={content} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
