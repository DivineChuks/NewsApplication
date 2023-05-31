import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="px-[6.5rem] bg-[#f9f9f9] text-dark py-[5rem] flex-col">
      <div className="flex justify-between gap-[4rem] w-full">
        <div className="flex flex-col w-1/2">
          <div className="flex gap-4">
            <p>Innovation</p>
            <p>2 hours</p>
          </div>
          <h2 className="text-[3.2rem] mt-[30px] leading-[4rem] font-semibold">
            Charge Two Devices at the Same Time With This Magnetic Wireless
            Charging Dock
          </h2>
          <div className="flex mt-[50px] gap-6 justify-between">
            <div className="">
              <div>
                <Image src="/card.png" alt="avatar" width={120} height={80} />
              </div>
              <p className="mt-4 text-[16px] leading-[19.2px] font-normal">
                Charge Two Devices at the Same Time With This Magnetic Wireless
                Charging Dock
              </p>
            </div>
            <div className="">
              <div>
                <Image src="/card.png" alt="avatar" width={120} height={80} />
              </div>
              <p className="mt-4 text-[16px] leading-[19.2px] font-normal">
                Tiny moon rover could be a stepping stone to Mars
              </p>
            </div>
          </div>
        </div>
        <div className="flex-col p-[24px] w-1/2">
          <h2 className="text-[31px] font-semibold z-10">Popular this week</h2>
          <div className="flex items-center gap-6 mt-[24px]">
            <div>
              <Image src="/card.png" alt="avatar" width={144} height={104} />
            </div>
            <div className="flex gap-[16px] flex-col">
              <div className="flex text-[12px] font-semibold gap-4">
                <p>Innovation</p>
                <p>2 hours</p>
              </div>
              <p className="text-[16px] font-semibold leading-[19px]">
                7 Ways You Can Reduce Climate<br></br> Change
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6 mt-[24px]">
            <div>
              <Image src="/card.png" alt="avatar" width={144} height={104} />
            </div>
            <div className="flex gap-[16px] flex-col">
              <div className="flex text-[12px] font-semibold gap-4">
                <p>Innovation</p>
                <p>2 hours</p>
              </div>
              <p className="text-[16px] font-semibold leading-[19px]">
                7 Ways You Can Reduce Climate<br></br> Change
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6 mt-[24px]">
            <div>
              <Image src="/card.png" alt="avatar" width={144} height={104} />
            </div>
            <div className="flex gap-[16px] flex-col">
              <div className="flex text-[12px] font-semibold gap-4">
                <p>Innovation</p>
                <p>2 hours</p>
              </div>
              <p className="text-[16px] font-semibold leading-[19px]">
                7 Ways You Can Reduce Climate<br></br> Change
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6 mt-[24px]">
            <div>
              <Image src="/card.png" alt="avatar" width={144} height={104} />
            </div>
            <div className="flex gap-[16px] flex-col">
              <div className="flex text-[12px] font-semibold gap-4">
                <p>Innovation</p>
                <p>2 hours</p>
              </div>
              <p className="text-[16px] font-semibold leading-[19px]">
                7 Ways You Can Reduce Climate<br></br> Change
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
