"use client";

import SectionHeader from "@/components/CommonUi/SectionHeader";
import FeatureProductCard from "./FeatureProductCard";

export default function FeatureProducts() {
  return (
    <>
      <div className='featureBg'>
        <div className='container  flex flex-col gap-5 py-10 md:-mt-0 rounded-xl'>
          <SectionHeader
            title={"Featured"}
            subtitle={"Our Most Popular Products"}
          />
          <div className='flex justify-center flex-col md:flex-row gap-10 my-5'>
            <FeatureProductCard />
            <FeatureProductCard />
            <FeatureProductCard />
          </div>
        </div>
      </div>
    </>
  );
}
