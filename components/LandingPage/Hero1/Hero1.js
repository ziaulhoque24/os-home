"use client";
import img from "@/assets/images/Frame.png";
import Image from "next/image";

export default function Hero1() {
  return (
    <>
      <div className='min-h-[480px] heroBg'>
        <div className='container flex md:flex-row flex-col justify-between'>
          <div className='flex flex-col gap-4 w-full md:w-[40%] mt-5 md:my-20'>
            <h3 className='font-bold text-base'>SMART SOFTWARE SOLUTION</h3>
            <h1 className='text-4xl font-extrabold tracking-tight  sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl text-primary'>
              We deliver growth for your business
            </h1>
            <h4 className='font-bold text-lg'>
              Every business is unique. And so every business should have its
              own customized solution. Stay ahead of your competitors by using
              our smart software.
            </h4>
          </div>
          <div className='relative my-8 w-full max-w-[400px] h-[306px] md:h-[382px]'>
            <Image
              src={img}
              fill
              className='object-cover'
              alt='omega-solution'
            />
          </div>
        </div>
      </div>
    </>
  );
}
