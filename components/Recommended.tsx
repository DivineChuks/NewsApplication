import Image from "next/image";
import React from "react";

const Recommended = () => {
  return (
    <div className="pt-[4.5rem] bg-[#f9f9f9] pb-[6.5rem] px-[2rem] md:px-[6.5rem]">
      <div className="flex mb-[65px]">
        <h2 className="text-[31px] font-semibold">Recommended For You</h2>
      </div>
      <div className="grid grid-cols-1 gap-[1rem] md:grid-cols-2">
        <div className="mb-4">
          <Image src="/recommended.png" alt="news" width={608} height={376} className="z-5 w-full relative" />
          <div className="flex absolute items-center bg-white text-dark w-[100px] rounded-0 px-[16px] drop-shadow-sm py-[14px] mt-[-1.8rem] z-10">
            <p>Science</p>
          </div>
          <h2 className="text-[24px] mt-[30px] mb-2 font-semibold">Frontiers of Education</h2>
          <p className="text-[16px] mb-[16px] text-[#515151]] font-normal">
            Charge Two Devices at the Same Time With This Magnetic Wireless
            Charging Dock...
          </p>
          <div className="flex items-center gap-6">
            <p className="text-[#9A9AB0] text-[12px]">Floyd Miles</p>
            <p className="text-[#9A9AB0] text-[12px]">3 Days Ago</p>
          </div>
        </div>
        <div className="mb-4">
          <Image src="/recommended.png" alt="news" width={608} height={376} className="z-5 w-full relative" />
          <div className="flex absolute items-center bg-white text-dark w-[100px] rounded-0 px-[16px] drop-shadow-sm py-[14px] mt-[-1.8rem] z-10">
            <p>Science</p>
          </div>
          <h2 className="text-[24px] mt-[30px] mb-2 font-semibold">Frontiers of Education</h2>
          <p className="text-[16px] mb-[16px] text-[#515151]] font-normal">
            Charge Two Devices at the Same Time With This Magnetic Wireless
            Charging Dock...
          </p>
          <div className="flex items-center gap-6">
            <p className="text-[#9A9AB0] text-[12px]">Floyd Miles</p>
            <p className="text-[#9A9AB0] text-[12px]">3 Days Ago</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recommended;
