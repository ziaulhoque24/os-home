"use client";
import Image from "next/image";
import logo from "../../assets/images/os-logo.png";
import NavMenu from "./NavMenu";

export default function Navbar() {
  return (
    <>
      <div className=''>
        <div className='container h-[70px] flex justify-between items-center'>
          <div className='relative w-[200px] min-h-[30px]'>
            <Image
              src={logo}
              className='object-cover'
              fill
              alt='omega-solution'
            />
          </div>
          <div>
            <NavMenu />
          </div>
        </div>
      </div>
    </>
  );
}
