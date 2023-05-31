'use client'
import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import React, { useState } from "react";

interface Link {
  label: string,
  link: string
}

const Navbar = () => {

  const [nav, setNav] = useState(false)

  const links:Link[] = [
    {
      label: 'Home',
      link: 'home'
    },
    {
      label: 'Latest',
      link: 'latest'
    },
    {
      label: 'Recommended',
      link: 'recommended'
    },
    {
      label: 'Newsletter',
      link: 'newsletter'
    },

  ]
  return (
    <>
      <div className="bg-lightOrange flex justify-between h-10 items-center px-4 md:px-[6.5rem]">
        <span className="flex text-white text-sm gap-4">
          <p>News</p>
          <p>Innovation</p>
          <p>Science</p>
          <p>Industry</p>
          <p>More</p>
        </span>
        <span className="text-white text-sm">social icons</span>
      </div>
      <div className="w-full grid h-[5rem] overflow-x-hidden">
            <div className="flex px-4 md:px-[6.5rem] w-full justify-between items-center">
                <Link href="/">
                    <Image alt="logo" src="/logo.svg" width={80} height={80} />
                </Link>
                <ul className="md:flex hidden items-center gap-8">
                  {links.map((link:Link) => (
                    <li key={link.link}>{link.label}</li>
                  ))}
                </ul>
                <div className="hidden md:flex">
                  <button>Subscribe</button>
                </div>
                <div className="md:hidden">
          <div className="cursor-pointer mr-4" onClick={() => setNav(true)}>
            <FaBars size={25} style={{ color: "#0D1326" }} />
          </div>
          {/* Mobile Menu */}
          <div
            className={
              nav
                ? "w-full h-full z-50 fixed left-0 top-0 bg-gray-900/70 text-white md:hidden backdrop-blur"
                : ""
            }
          >
            <div
              className={
                nav
                  ? "fixed w-4/5 bg-darkBlue left-0 top-0 text-white h-full p-10 pt-10 ease-in duration-500"
                  : "fixed p-5 top-0 left-[-100%] duration-500 h-full ease-in"
              }
            >
              <div className="w-full flex justify-between items-center mb-[5rem]">
                <div
                  className="cursor-pointer p-0"
                  onClick={() => setNav(false)}
                >
                  <Image src="/logo.svg" alt="site logo" width={60} height={60} />
                </div>
                <div
                  className="p-4 cursor-pointer"
                  onClick={() => setNav(false)}
                >
                  <FaTimes size={30} />
                </div>
              </div>
              <div className="flex flex-col text-white justify-between h-fit">
                <ul className="capitalize mb-8">
                  {links.map((link:Link) => (
                    <li
                      key={link.link}
                      className="text-[1.6rem] tracking-wider py-8 cursor-pointer"
                    >
                        {link.label}
                    </li>
                  ))}
                </ul>
                <button
                  className="bg-white text-dark py-[1.4rem] px-[3.2rem] rounded-lg font-rubik
                  font-bold
                  text-[1.6rem]"
                >
                  subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
            </div>
      </div>
    </>
  );
};

export default Navbar;
