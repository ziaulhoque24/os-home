"use client";

import Image from "next/image";

export default function ServiceCard({ svgImg, title, description }) {
  return (
    <>
      <div className='bg-white relative h-[500px] rounded-xl'>
        <div className='absolute w-[290px] h-[290px] lg:w-[290px] lg:h-[290px] md:w-[200px] md:h-[200px] rounded-full bg-white -top-10 left-1/2 -translate-x-1/2 z-[1]'></div>
        <div className='relative flex flex-col items-center my-10 gap-20 px-5 z-10'>
          <div className='relative w-[150px] min-h-[90px]'>
            <Image src={svgImg} alt={title} />
          </div>
          <div className='flex flex-col items-center gap-10'>
            <div className='text-xl font-bold text-center'>{title}</div>
            <p className='text-center'>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
