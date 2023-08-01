"use client";

import service1 from "@/assets/images/service1.png";
import Image from "next/image";
export default function ServiceCard() {
  return (
    <>
      <div className='bg-white relative h-[500px] rounded-xl'>
        <div className='absolute w-[290px] h-[290px] lg:w-[290px] lg:h-[290px] md:w-[200px] md:h-[200px] rounded-full bg-white -top-10 left-1/2 -translate-x-1/2 z-[1]'></div>
        <div className='relative flex flex-col items-center my-10 gap-20 px-5 z-10'>
          <div className='relative w-[150px] min-h-[90px]'>
            <Image
              src={service1}
              className='object-cover'
              fill
              alt='omega-solution'
            />
          </div>
          <div className='flex flex-col items-center gap-10'>
            <div className='text-xl font-bold text-center'>
              Custom software <br /> solution
            </div>
            <p className='text-center'>
              Every business has its strategy to run their business. And so they
              need their functionalities. We develop software according to the
              business needs so they can stand out.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
