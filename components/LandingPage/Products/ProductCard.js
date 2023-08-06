"use client";

import Link from "next/link";

export default function ProductCard({ name, price, url }) {
  return (
    <>
      <div className='w-auto md:w-[350px] md:h-[400px] bg-white drop-shadow-lg rounded-lg py-5'>
        <div className='flex flex-col items-center gap-5 py-5 rounded-t-lg'>
          <h1 className='text-xl font-bold'>{name}</h1>
          <div className='text-center'>
            <span>One time payment</span>
            <br />
            <span className='text-3xl font-bold'>{price}$</span>
          </div>
          <Link
            href={`/product/${url}`}
            className='px-2 md:px-5 py-2 bg-black rounded-2xl text-white'
          >
            Get Started
          </Link>
        </div>
        <ul className='px-10 py-5 list-disc'>
          <li>100 subscribers</li>
          <li>100 subscribers</li>
          <li>100 subscribers</li>
          <li>100 subscribers</li>
          <li>100 subscribers</li>
        </ul>
      </div>
    </>
  );
}
