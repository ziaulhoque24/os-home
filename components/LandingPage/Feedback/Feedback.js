"use client";

import {
  MdFormatQuote,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "@/assets/icons/icons";
import ReviewCard from "./ReviewCard";

export default function Feedback() {
  return (
    <>
      <div className='feedback-bg my-10'>
        <div className='container py-6'>
          <div className=' flex flex-col items-center gap-3'>
            <h1 className='text-3xl font-bold'>Our Customer&apos;s Feedback</h1>
            <p>
              Our honorable and valuable clients share their values with us.
              Let’s hear our satisfied clients’ voices.
            </p>
          </div>
          <div className='relative'>
            <span className='absolute -top-[15px] left-[11px]'>
              <MdFormatQuote className='text-4xl text-[#E9A27F] rotate-180' />
            </span>
            <span className='absolute -bottom-[15px] right-[11px]'>
              <MdFormatQuote className='text-4xl text-[#E9A27F]' />
            </span>
            <span className='absolute  left-0 top-1/2 -translate-y-1/2'>
              <MdKeyboardArrowLeft className='text-5xl' />
            </span>
            <span className='absolute  right-0 top-1/2 -translate-y-1/2'>
              <MdKeyboardArrowRight className='text-5xl' />
            </span>
            <div className='flex items-center gap-5 px-10 mt-5'>
              <ReviewCard />
              <ReviewCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
