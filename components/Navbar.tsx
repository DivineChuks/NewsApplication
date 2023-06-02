"use client";
import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

interface Link {
  label: string;
  link: string;
}

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [search, setSearch] = useState(false);

  const links: Link[] = [
    {
      label: "Home",
      link: "home",
    },
    {
      label: "Latest",
      link: "latest",
    },
    {
      label: "Recommended",
      link: "recommended",
    },
    {
      label: "Newsletter",
      link: "newsletter",
    },
  ];
  return (
    <>
      {/* Desktop Menu */}
      <div className="bg-lightOrange flex justify-between h-[50px] items-center px-4 md:px-[6.5rem]">
        <div className="flex items-center text-white text-[16px] font-medium gap-4">
          <p>News</p>
          <p>Innovation</p>
          <p>Science</p>
          <p>Industry</p>
        </div>
        <div className="hidden md:flex gap-4 text-white text-[16px] font-medium">
          <span>IG</span>
          <span>TW</span>
          <span>FB</span>
          <span>YT</span>
        </div>
      </div>
      <div className="w-full grid h-[5rem] overflow-x-hidden">
        <div className="flex px-6 md:px-[6.5rem] w-full justify-between items-center">
          <Link href="/">
            <Image alt="logo" src="/logo.png" width={135} height={56} />
          </Link>
          <ul className="md:flex hidden items-center gap-10">
            {links.map((link: Link) => (
              <li
                key={link.link}
                className="text-[16px] cursor-pointer font-medium text-dark"
              >
                <ScrollLink
                  to={link.link}
                  spy={true}
                  smooth={true}
                  duration={500}
                >
                  {link.label}
                </ScrollLink>
              </li>
            ))}
          </ul>
          <div className="hidden md:flex gap-8 items-center">
            {!search && (
              <AiOutlineSearch
                size={18}
                className="cursor-pointer"
                onClick={() => setSearch(true)}
              />
            )}
            {search && (
              <input
                placeholder="Search news"
                className="border border-gray-200 w-[200px] rounded-lg px-4 py-[10px] focus:outline-none"
              />
            )}
            <button className="bg-lightOrange text-[16px] font-medium px-[24px] py-[12px] rounded-lg text-white">
              <ScrollLink spy={true} smooth={true} duration={500} to="newsletter">
                Subscribe
              </ScrollLink>
            </button>
          </div>
          <div className="md:hidden">
            <div className="cursor-pointer" onClick={() => setNav(true)}>
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
                    ? "fixed w-4/5 bg-[#182243] left-0 top-0 text-white h-full p-10 pt-10 ease-in duration-500"
                    : "fixed p-5 top-0 left-[-100%] duration-500 h-full ease-in"
                }
              >
                <div className="w-full flex justify-between items-center mb-[2rem]">
                  <div
                    className="cursor-pointer p-0"
                    onClick={() => setNav(false)}
                  >
                    <Image
                      src="/logo.png"
                      alt="site logo"
                      width={120}
                      height={50}
                    />
                  </div>
                  <div
                    className="p-4 cursor-pointer"
                    onClick={() => setNav(false)}
                  >
                    <FaTimes size={30} />
                  </div>
                </div>
                <div className="flex flex-col text-white justify-between h-fit">
                  <ul className="capitalize mb-4">
                    {links.map((link: Link) => (
                      <li
                        key={link.link}
                        className="text-[15px] font-medium text-dark py-4 cursor-pointer"
                      >
                        <ScrollLink
                          to={link.link}
                          spy={true}
                          smooth={true}
                          duration={500}
                          onClick={() => setNav(false)}
                        >
                          {link.label}
                        </ScrollLink>
                      </li>
                    ))}
                  </ul>
                  <button className="bg-lightOrange text-white px-[24px] py-[12px] w-full rounded-lg font-medium text-[16px]">
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
