"use client";
import img from "@/assets/images/Frame.png";
import Image from "next/image";

export default function Hero1() {
  return (
    <>
      <div className='h-[calc(100vh-70px)] bg-[#F2F7F9] relative'>
        <div className='heroBg'></div>
        <div className='absolute top-0 left-0 w-full h-full'>
          <div className='container flex md:flex-row flex-col justify-evenly items-center h-[calc(100vh-70px)]'>
            <div className='flex flex-col gap-4 w-full md:w-[40%] mt-5 md:my-20'>
              <h3 className='font-bold text-base flex items-center gap-3'>
                <span className='w-5 h-1 bg-black inline-block'></span>SMART
                SOFTWARE SOLUTION
              </h3>
              <h1 className='text-4xl font-extrabold tracking-tight  sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl text-primary'>
                We deliver <span className='text-[#FF5252]'>growth</span> for
                your business
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
      </div>
    </>
  );
}
