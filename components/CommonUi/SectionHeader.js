"use client";

import circleGroup from "@/assets/images/fill-circles.png";
import Image from "next/image";

export default function SectionHeader({title, subtitle}) {
  return (
    <>
      <div className='relative'>
        <Image src={circleGroup} alt='circle group' className='object-cover' />
        <div className='absolute top-0 left-0'>
          <div className=' flex gap-4 items-center'>
            <span className='w-5 h-1 bg-black inline-block'></span>
            <span className='text-xl'>{title}</span>
          </div>
          <div className='animate-text font-bold text-5xl'>
           {subtitle}
          </div>
        </div>
      </div>
    </>
  );
}
