"use client";

import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "@/assets/icons/icons";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "./ProductCard";

export default function Products() {
  return (
    <>
      <div className='container'>
        <div className='flex justify-between px-5 my-5'>
          <span className='font-bold text-xl'>All Products</span>
          <div className='flex gap-3'>
            <span className='custom-prev-button'>
              <MdKeyboardArrowLeft className='text-5xl bg-gray-400/70 rounded-full' />
            </span>
            <span className='custom-next-button'>
              <MdKeyboardArrowRight className='text-5xl bg-gray-400/70 rounded-full' />
            </span>
          </div>
        </div>
        <div className='relative slider-abCandy'>
          <Swiper
            grabCursor={true}
            loop={true}
            slidesPerView={1}
            defaultValue={1}
            centeredSlides
            pagination
            spaceBetween={30}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 50,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            navigation={{
              nextEl: ".custom-next-button",
              prevEl: ".custom-prev-button",
            }}
            modules={[Pagination, Navigation]}
            className='mySwiper'
          >
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
