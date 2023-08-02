"use client";

import Image from "next/image";
import express from "../../assets/images/omegaExpress.png";
import prime from "../../assets/images/omegaPrime.png";
import logo from "../../assets/images/os-logo.png";
import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <>
      <div className='border-t'>
        <div className='container pt-10'>
          <div className='flex flex-col md:flex-row justify-between gap-5'>
            <div className='flex flex-col gap-3'>
              <div className='relative w-[200px] min-h-[30px]'>
                <Image
                  src={logo}
                  className='object-cover'
                  fill
                  alt='omega-solution'
                />
              </div>
              <address>
                Latif tower, Milgate, Tongi, Gazipur 1710, Bangladesh
              </address>
              <div className='flex gap-3 items-center'>
                <h1 className='font-bold text-lg'>Our corners</h1>
                <div className='relative w-[86px] h-[60px]'>
                  <Image
                    src={express}
                    className='object-cover'
                    fill
                    alt='omega-solution'
                  />
                </div>
                <div className='relative w-[86px] h-[60px]'>
                  <Image
                    src={prime}
                    className='object-cover'
                    fill
                    alt='omega-solution'
                  />
                </div>
              </div>
            </div>
            <div>
              <ul>
                <li className='text-lg font-semibold text-primary'>Products</li>
                <li>CRM</li>
                <li>HRM</li>
                <li>ERP</li>
                <li>POS</li>
              </ul>
            </div>
            <div>
              <ul>
                <li className='text-lg font-semibold text-primary'>Company</li>
                <li>About us</li>
                <li>Privacy policy</li>
                <li>Terms of us</li>
              </ul>
            </div>
            <div>
              <ul>
                <li className='text-lg font-semibold text-primary'>Helps</li>
                <li>FAQ</li>
                <li>Contacts</li>
              </ul>
            </div>
          </div>
          <div className='flex flex-col md:flex-row md:items-end justify-between  mt-8 mb-2 gap-2'>
            <copyright>All Rights Reserved OMEGA SOLUTION</copyright>
            <SocialIcons />
          </div>
        </div>
      </div>
    </>
  );
}
