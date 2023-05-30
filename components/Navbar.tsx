import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="bg-black flex justify-between h-10 items-center px-8">
        <span className="flex text-white text-sm gap-4">
          <p>Date</p>
          <p>subscribe</p>
          <p>Contact</p>
        </span>
        <span className="text-white text-sm">social icons</span>
      </div>
      <div className="w-screen grid h-12 ">
            <div className="justify-between items-center">
                <Link href="/">
                    <Image alt="logo" src="/logo.svg" width={20} height={20} />
                </Link>
            </div>
      </div>
    </div>
  );
};

export default Navbar;
