"use client";

import clients from "@/assets/images/clients-logo.png";
import countries from "@/assets/images/map.png";
import Image from "next/image";

export default function ClientCountry() {
  return (
    <>
      <div className='container'>
        <h1 className='text-3xl text-center font-bold pb-5'>Our Global Clients</h1>
        <div className='relative w-full h-[550px]'>
          <Image
            src={countries}
            className='object-cover'
            fill
            alt='omega-solution'
          />
        </div>
        <div className='relative w-full h-[128px]'>
          <Image
            src={clients}
            className='object-cover'
            fill
            alt='omega-solution'
          />
        </div>
      </div>
    </>
  );
}
