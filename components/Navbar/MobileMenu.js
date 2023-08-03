"use client";

import { GiMoon } from "@/assets/icons/icons";
import Link from "next/link";

export default function MobileMenu() {
  return (
    <>
      <div className='flex flex-col items-center gap-8 py-10'>
        <Link
          className='hover:text-primary/60 rounded'
          href='https://osdocs.vercel.app'
        >
          Doc
        </Link>
        <Link className='hover:text-primary/60 rounded' href='/#products'>
          Products
        </Link>
        <Link className='hover:text-primary/60 rounded' href='/#services'>
          Services
        </Link>
        <Link className='hover:text-primary/60 rounded' href='/contact'>
          Contact
        </Link>
        <Link className='hover:text-primary/60 rounded' href='/'>
          Support
        </Link>
        <button className='px-2 py-1 rounded'>
          <GiMoon className='text-3xl' />
        </button>
      </div>
    </>
  );
}
