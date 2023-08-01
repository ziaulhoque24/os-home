"use client";
import Image from "next/image";
import logo from "../../assets/images/os-logo.png";
import NavMenu from "./NavMenu";

export default function Navbar() {
  return (
    <>
      <div className=''>
        <div className='container h-[70px] flex justify-between items-center'>
          <div className=''>
            <Image
              src={logo}
              className='w-[150px] md:w-auto'
              alt='omega-solution'
            />
          </div>
          <div className='hidden md:block'>
            <NavMenu />
          </div>
        </div>
      </div>
    </>
  );
}
