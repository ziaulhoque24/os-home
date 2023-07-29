"use client";

import { GiMoon } from "@/assets/icons/icons";
import Link from "next/link";

export default function NavMenu() {
  return (
    <>
      <div className='flex justify-between gap-3'>
        <Link className='px-2 py-1 hover:bg-slate-500/60 rounded' href='/'>
          Doc
        </Link>
        <Link className='px-2 py-1 hover:bg-slate-500/60 rounded' href='/'>
          Products
        </Link>
        <Link className='px-2 py-1 hover:bg-slate-500/60 rounded' href='/'>
          Services
        </Link>
        <Link className='px-2 py-1 hover:bg-slate-500/60 rounded' href='/'>
          Contact
        </Link>
        <Link className='px-2 py-1 hover:bg-slate-500/60 rounded' href='/'>
          Support
        </Link>
        <button className='px-2 py-1 hover:bg-slate-500/60 rounded'>
          <GiMoon className='text-3xl' />
        </button>
      </div>
    </>
  );
}
