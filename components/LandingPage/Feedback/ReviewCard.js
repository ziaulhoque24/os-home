"use client";

import user from "@/assets/images/review-user.png";
import Image from "next/image";

export default function ReviewCard() {
  return (
    <>
      <div className='bg-white flex flex-col md:flex-row justify-between items-center p-5 gap-5 rounded-lg drop-shadow-md'>
        <div className=''>
          <Image
            width={86}
            height={86}
            src={user}
            className='rounded-full  overflow-hidden'
            alt='omega-solution'
          />
        </div>

        <div className='w-4/5 flex flex-col gap-5'>
          <p>
            I love this brand, I can&apos;t say anything more than they&apos;re
            absolutely amazing. You need to buy their products, my life has been
            changed since using them!
          </p>
          <span className='text-[#E9A27F]'>Pinardita, Indonesia</span>
        </div>
      </div>
    </>
  );
}
