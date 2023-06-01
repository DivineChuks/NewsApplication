import Image from "next/image";
import React from "react";

const MAX_CATEGORY_LENGTH = 10;

const Hero = () => {
  return (
    <div className="px-[2rem] md:px-[6.5rem] bg-[#f9f9f9] text-dark py-[5rem] flex-col">
      <div className="flex flex-col md:flex-row justify-between gap-[6rem] md:gap-[4rem] w-full">
        <div className="flex flex-col w-full md:w-1/2">
          <div className="flex gap-4">
            <p>Innovation</p>
            <p>2 hours</p>
          </div>
          <h2 className="text-[2.5rem] md:text-[3.2rem] mt-[30px] leading-[3.5rem] md:leading-[4rem] font-semibold">
            Charge Two Devices at the Same Time With This Magnetic Wireless
            Charging Dock
          </h2>
          <div className="flex mt-[50px] gap-6 justify-between">
            <div className="">
              <div>
                <Image src="/card.png" alt="avatar" width={120} height={80} />
              </div>
              <p className="mt-4 text-[16px] leading-[19.2px] max-w-[250px] font-normal">
                Charge Two Devices at the Same Time With This Magnetic Wireless
                Charging Dock
              </p>
            </div>
            <div className="">
              <div>
                <Image src="/card.png" alt="avatar" width={120} height={80} />
              </div>
              <p className="mt-4 text-[16px] leading-[19.2px] max-w-[250px] font-normal">
                Tiny moon rover could be a stepping stone to Mars
              </p>
            </div>
          </div>
        </div>
        <div className="flex-col mt-[1rem] md:mt-0 p-[24px] w-full md:w-1/2">
          <h2 className="text-[25px] font-semibold z-10">BUSINESS NEWS</h2>
          <div className="flex items-center gap-6 mt-[24px]">
            <div>
              <Image src="/card.png" alt="avatar" width={144} height={104} />
            </div>
            <div className="flex gap-[16px] flex-col">
              <div
                className="flex items-center bg-lightOrange text-white rounded-0 px-[10px] py-[8px]"
                style={{ width: "max-content" }}
              >
                <p className="text-white text-[10px] uppercase font-semibold">
                  SPORTS
                </p>
              </div>
              <a href="#" className="hover:underline cursor-pointer">
              <p className="text-[16px] font-semibold leading-[19px]">
                7 Ways You Can Reduce Climate
              </p>
              </a>
              <div className="flex text-[12px] font-semibold gap-4">
                <p>Innovation</p>
                <p>2 hours</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
