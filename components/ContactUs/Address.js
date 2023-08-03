"use client";

import {
  AiOutlinePhone,
  GrLocation,
  SiMinutemailer,
} from "@/assets/icons/icons";

export default function Address() {
  return (
    <>
      <div className='flex flex-col md:flex-row gap-5 justify-evenly mt-20'>
        <div className='flex md:flex-col items-center gap-2'>
          <GrLocation className='text-3xl' />
          <address>
            Latif tower, Milgate, Tongi
            <br />
            Gazipur 1710, Bangladesh
          </address>
        </div>
        <div className='flex md:flex-col items-center gap-2'>
          <AiOutlinePhone className='text-3xl' />
          <span>+880-1885-996601</span>
        </div>
        <div className='flex md:flex-col items-center gap-2'>
          <SiMinutemailer className='text-3xl' />
          <email>solution@omega.ac</email>
        </div>
      </div>
    </>
  );
}
