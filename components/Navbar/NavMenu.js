"use client";

import { GiMoon } from "@/assets/icons/icons";
import Link from "next/link";

export default function NavMenu() {
  return (
    <>
      <div className='flex justify-between gap-5'>
        <Link
          target='_blank'
          className=' hover:text-primary/60 rounded'
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
        <button className='rounded'>
          <GiMoon className='text-3xl' />
        </button>
      </div>
    </>
  );
}
