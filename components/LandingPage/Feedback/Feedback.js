"use client";

import {
  MdFormatQuote,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "@/assets/icons/icons";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ReviewCard from "./ReviewCard";

export default function Feedback() {
  return (
    <>
      <div className='feedback-bg my-10'>
        <div className='container py-6'>
          <div className=' flex flex-col items-center gap-3'>
            <h1 className='text-3xl font-bold text-center'>
              Our Customer&apos;s Feedback
            </h1>
            <p className='text-center'>
              Our honorable and valuable clients share their values with us.
              Let’s hear our satisfied clients’ voices.
            </p>
          </div>
          <div className='relative my-10'>
            <span className='absolute top-[25px] left-[11px]'>
              <MdFormatQuote className='text-4xl text-[#E9A27F] rotate-180' />
            </span>
            <span className='absolute bottom-[25px] right-[11px]'>
              <MdFormatQuote className='text-4xl text-[#E9A27F]' />
            </span>

            <div className='relative px-10'>
              <button className='custom-prev-button absolute  left-0 top-1/2 -translate-y-1/2'>
                <MdKeyboardArrowLeft className='text-5xl' />
              </button>
              <button className='custom-next-button absolute  right-0 top-1/2 -translate-y-1/2'>
                <MdKeyboardArrowRight className='text-5xl' />
              </button>
              <Swiper
                grabCursor={true}
                loop={true}
                slidesPerView={1}
                defaultValue={1}
                centeredSlides={false}
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
                }}
                navigation={{
                  nextEl: ".custom-next-button",
                  prevEl: ".custom-prev-button",
                }}
                modules={[Pagination, Navigation]}
                className='feedbackSlider pb-8'
              >
                <SwiperSlide>
                  <ReviewCard />
                </SwiperSlide>
                <SwiperSlide>
                  <ReviewCard />
                </SwiperSlide>
                <SwiperSlide>
                  <ReviewCard />
                </SwiperSlide>
                <SwiperSlide>
                  <ReviewCard />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
