"use client";

import crm from "@/assets/images/crm.jpg";
import Image from "next/image";

export default function FeatureProductCard() {
  return (
    <>
      <div className='bg-white rounded-xl'>
        <div className='relative w-full h-[221px]'>
          <Image src={crm} className='object-cover' fill alt='crm' />
        </div>
        <h1 className='p-5'>
          CRM OS - Contact, Company, Opportunity, Quote, Task all in one CRM
          software
        </h1>
      </div>
    </>
  );
}
