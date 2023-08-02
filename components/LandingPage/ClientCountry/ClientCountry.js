"use client";

import country1 from "@/assets/images/country1.png";
import country2 from "@/assets/images/country2.png";
import country3 from "@/assets/images/country3.png";
import country4 from "@/assets/images/country4.png";
import countries from "@/assets/images/map.png";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function ClientCountry() {
  return (
    <>
      <div className='container'>
        <h1 className='text-3xl text-center font-bold pb-5 animate-text'>
          Our Global Clients
        </h1>
        <div className='relative w-full h-[135px] md:h-[290px] lg:h-[381px] xl:h-[463px] 2xl:h-[550px]'>
          <Image
            src={countries}
            className='object-cover'
            fill
            alt='omega-solution'
          />
        </div>
        <div className='relative'>
          <Swiper
            grabCursor={true}
            slidesPerView={2}
            centeredSlides={false}
            pagination={false}
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            modules={[Autoplay]}
            navigation={false}
            className='mySwiper'
          >
            <SwiperSlide>
              <Image src={country1} alt='omega-solution' />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={country2} alt='omega-solution' />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={country3} alt='omega-solution' />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={country4} alt='omega-solution' />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={country2} alt='omega-solution' />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
