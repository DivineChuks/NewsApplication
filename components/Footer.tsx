import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="flex flex-col text-dark md:px-0 px-[2rem] pt-16 pb-6 overflow-hidden">
      <div className="grid grid-cols-2 place-items-center md:place-items-start md:grid-cols-5 w-full">
        <div className="flex col-span-2 flex-col gap-4 md:pl-[6.5rem]">
          <Image src="/logo.png" alt="footer" width={120} height={80} />
          <p className="text-[16px] text-[#515151] leading-[20px] font-normal w-full md:w-[300px]">
            Stay connected with us to receive the latest updates and exclusive
            offers. Join our newsletter and be the first to know about the most
            recent news, and articles. Don't miss out on the
            exciting content and special deals.
          </p>
        </div>
        <div className="flex flex-col w-full gap-6 pt-8 md:pt-0 md:pl-[4rem]">
          <h2 className="text-dark font-semibold leading-[20.15px] mt-8 md:mt-0 text-[16px]">
            Categories
          </h2>
          <p className="cursor-pointer text-[14px] text-[#515151] font-normal">
            International
          </p>
          <p className="cursor-pointer text-[14px] text-[#515151] font-normal">
            Regional
          </p>
          <p className="cursor-pointer text-[14px] text-[#515151] font-normal">
            Politics
          </p>
          <p className="cursor-pointer text-[14px] text-[#515151] font-normal">
            Business
          </p>
          <p className="cursor-pointer text-[14px] text-[#515151] font-normal">
            Health
          </p>
        </div>
        <div className="flex flex-col w-full gap-6 pt-8 md:pt-0 md:pl-[4rem]">
          <h2 className="text-dark font-semibold leading-[20.15px] mt-8 md:mt-0 text-[16px]">
            Company
          </h2>
          <p className="cursor-pointer text-[14px] text-[#515151] font-normal">
            About Us
          </p>
          <p className="cursor-pointer text-[14px] text-[#515151] font-normal">
            Careers
          </p>
          <p className="cursor-pointer text-[14px] text-[#515151] font-normal">
            Privacy Policy
          </p>
          <p className="cursor-pointer text-[14px] text-[#515151] font-normal">
            Terms of Service
          </p>
          <p className="cursor-pointer text-[14px] text-[#515151] font-normal">
            Contact Us
          </p>
        </div>
        <div className="flex flex-col w-full gap-6 pt-8 md:pt-0 md:pl-[4rem]">
          <h2 className="text-dark font-semibold leading-[20.15px] mt-8 md:mt-0 text-[16px]">
            Social Media
          </h2>
          <p className="cursor-pointer text-[14px] text-[#515151] font-normal">
            Youtube
          </p>
          <p className="cursor-pointer text-[14px] text-[#515151] font-normal">
            Instagram
          </p>
          <p className="cursor-pointer text-[14px] text-[#515151] font-normal">
            Facebook
          </p>
          <p className="cursor-pointer text-[14px] text-[#515151] font-normal">
            Twitter
          </p>
        </div>
      </div>
      <hr className="border-1 h-px bg-gray-100 w-full  mx-auto mt-14 mb-7" />
      <div className="flex justify-center gap-3 md:gap-0 md:justify-between w-full mx-auto">
        <p className="text-[14px] text-[#515151] font-normal md:pl-[6.5rem]">
          Copyright Tanash Air studio
        </p>
        <div className=" flex items-center gap-1 md:pr-[6.5rem]">
          <span className="text-[16px] font-semibold text-dark">EN</span>
          <FiChevronDown className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
