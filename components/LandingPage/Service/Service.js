"use client";

import ServiceCard from "./ServiceCard";

export default function Service() {
  return (
    <>
      <div className='serviceBg mt-16'>
        <div className='container'>
          <div className='flex flex-col items-center gap-10 py-16'>
            <h1 className='text-3xl text-center font-bold'>
              We are an AI-Based software company <br /> from Bangladesh
            </h1>
            <h1 className='text-3xl text-center font-bold'>Our services</h1>
          </div>
          <div className='flex gap-10 mt-16'>
            <ServiceCard />
            <ServiceCard />
            <ServiceCard />
          </div>
        </div>
      </div>
    </>
  );
}
