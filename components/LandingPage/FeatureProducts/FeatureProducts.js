"use client";

import FeatureProductCard from "./FeatureProductCard";

export default function FeatureProducts() {
  return (
    <>
      <div className='featureBg'>
        <div className='container  flex flex-col gap-5 py-10 md:-mt-0 rounded-xl'>
          <div className='flex justify-center px-4 py-1'>
            <span className='font-bold animate-text text-2xl'>Featured</span>
          </div>
          <div className='flex justify-center flex-col md:flex-row gap-10'>
            <FeatureProductCard />
            <FeatureProductCard />
            <FeatureProductCard />
          </div>
        </div>
      </div>
    </>
  );
}
