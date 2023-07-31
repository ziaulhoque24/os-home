"use client";

import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from "@/assets/icons/icons";
import ProductCard from "./ProductCard";

export default function Products() {
  return (
    <>
      <div className='container'>
        <div className='flex justify-between px-5 my-5'>
          <span className='font-bold text-xl'>All Products</span>
          <div className='flex gap-3'>
            <span className=''>
              <MdKeyboardArrowLeft className='text-5xl bg-gray-400/70 rounded-full' />
            </span>
            <span className=''>
              <MdKeyboardArrowRight className='text-5xl bg-gray-400/70 rounded-full' />
            </span>
          </div>
        </div>
        <div className='flex justify-between gap-1 md:gap-5'>
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </>
  );
}
