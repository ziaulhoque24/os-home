"use client";

import FeatureProductCard from "./FeatureProductCard";

export default function FeatureProducts() {
  return (
    <>
      <div className='container featureBg flex flex-col gap-5 py-5 -mt-0 md:-mt-10 rounded-xl'>
        <div className='flex justify-between px-4 py-1'>
          <span className='font-bold'>Featured</span>
          <span>More</span>
        </div>
        <div className='flex flex-col md:flex-row gap-10'>
          <FeatureProductCard />
          <FeatureProductCard />
          <FeatureProductCard />
        </div>
      </div>
    </>
  );
}
