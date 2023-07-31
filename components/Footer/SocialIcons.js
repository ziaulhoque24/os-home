"use client";

import {
  AiOutlineFacebook,
  AiOutlineLinkedin,
  BiCoinStack,
  FaTwitter,
} from "@/assets/icons/icons";
import Link from "next/link";

export default function SocialIcons() {
  return (
    <>
      <div className='flex gap-4 items-center text-xl'>
        <Link href={"#"}>
          <AiOutlineFacebook />
        </Link>
        <Link href={"#"}>
          <BiCoinStack />
        </Link>
        <Link href={"#"}>
          <FaTwitter />
        </Link>
        <Link href={"#"}>
          <AiOutlineLinkedin />
        </Link>
      </div>
    </>
  );
}
