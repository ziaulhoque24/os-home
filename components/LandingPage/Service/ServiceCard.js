"use client";

import Image from "next/image";

export default function ServiceCard({ svgImg, title, description }) {
  return (
    <>
      <div className='bg-white rounded-xl drop-shadow-md hover:scale-105 duration-500'>
        <div className='flex flex-col items-center my-10 gap-8 px-5'>
          <Image width={90} height={78.16} src={svgImg} alt={title} />
          <div className='flex flex-col items-center gap-5'>
            <div className='text-xl font-bold text-center'>{title}</div>
            <p className='text-center text-sm'>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
