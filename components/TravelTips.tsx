"use client";

import { guides } from "@/constants";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const TravelTips = () => {
  return (
    <section className="wrapper section-padding">
      <div className="max-w-xl mx-auto text-center space-y-2 pb-10">
        <h2 className="text-2xl md:text-4xl font-bold text-foreground uppercase">
          Malaysia <span className="text-gradient">Travel</span> Guide
        </h2>
        <p className="text-sm text-foreground">
          Explore the Beauty of Malaysia
        </p>
      </div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        speed={750}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={true}
        grabCursor={true}
        modules={[Navigation, Autoplay, Pagination]}
        breakpoints={{
          320: { slidesPerView: 1.1, spaceBetween: 10 },
          480: { slidesPerView: 2.6, spaceBetween: 10 },
          700: { slidesPerView: 4 },
        }}
        pagination={{
          clickable: true,
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-20">
          {guides.map((guide, index) => (
            <SwiperSlide
              key={index}
              className="bg-card rounded-xl shadow-md p-4 min-h-[320px] cursor-pointer relative"
            >
              <div className="h-56">
                <Image
                  src={guide.image}
                  height={1280}
                  width={1280}
                  priority
                  alt={guide.title}
                  className="object-cover rounded-xl h-full w-full"
                />
              </div>

              <div className="space-y-1 mt-2">
                <h3 className="text-base text-gradient uppercase tracking-wider font-bold">
                  {guide.title}
                </h3>
                <p className="text-foreground text-sm leading-5 ">
                  {guide.description}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </section>
  );
};

export default TravelTips;
