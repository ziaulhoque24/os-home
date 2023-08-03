"use client";
import { GoThreeBars } from "@/assets/icons/icons";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../../assets/images/os-logo.png";
import MobileMenu from "./MobileMenu";
import NavMenu from "./NavMenu";

export default function Navbar() {
  const [collapse, setCollapse] = useState(true);
  const toggleCollapse = () => {
    setCollapse((prev) => !prev);
  };
  return (
    <>
      <div className='sticky top-0 bg-white/95 z-20'>
        <div className='container h-[70px] flex justify-between items-center'>
          <Link className='' href='/'>
            <Image
              src={logo}
              className='w-[150px] md:w-auto'
              alt='omega-solution'
            />
          </Link>
          <div className='hidden md:block'>
            <NavMenu />
          </div>

          <div className='md:hidden'>
            <GoThreeBars onClick={toggleCollapse} className='text-3xl' />
          </div>
        </div>
        {!collapse && (
          <div className='fixed top-0 left-0 right-0 z-10 bottom-0 flex items-center justify-center'>
            <div
              onClick={() => setCollapse(true)}
              className='fixed inset-0 bg-black/40'
            ></div>
            <div
              className={`md:hidden fixed top-0 left-0 z-20 bg-white h-screen overflow-hidden transition-all ${
                collapse ? "w-0 border-0" : "w-[320px]"
              }`}
            >
              <MobileMenu setCollapse={setCollapse} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}
