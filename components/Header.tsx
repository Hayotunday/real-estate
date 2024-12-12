import React from "react";
import MobileNav from "./MobileNav";
import { FaHouseChimney } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <div className="fixed top-0 w-full z-10 bg-slate-50 bg-transparent">
      <div className="flex flex-row justify-between items-center w-full text-blue-950 px-5 md:px-10 py-3 bg-transparent">
        <div className="text-lg font-medium text-blue-950 flex flex-row gap-3 justify-start items-end md:w-1/3 pl-5">
          <FaHouseChimney size={30} />
          <span>Real Estate</span>
        </div>

        <nav className="hidden md:flex flex-row justify-center items-center gap-16 text-lg font-medium md:w-1/3">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Listing</Link>
          <Link href={"/"}>About</Link>
        </nav>

        <div className="pr-5 md:w-1/3">
          <div className="flex flex-row justify-end items-center gap-5 md:gap-0 w-full">
            <Image
              alt="profile image"
              src={"/images/profile.jpg"}
              width={35}
              height={35}
              className="rounded-full object-contain a"
            />
            <MobileNav />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
