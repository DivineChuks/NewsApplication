import Subscription from "@/components/Subscription";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { BiMessageRounded } from "react-icons/bi";
import { AiOutlineShareAlt } from "react-icons/ai";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
    <div className="bg-[#f9f9f9] text-dark px-[2rem] md:px-[6.5rem] text-dark py-[5rem]">
      <div className="flex flex-col md:flex-row justify-between md:gap-[4rem] w-full items-center gap-[4rem]">
        <div className="flex flex-col w-full md:w-1/2">
          <div className="flex gap-4">
            <p>Innovation</p>
            <p>2 hours</p>
          </div>
          <h2 className="text-[2.5rem] md:text-[3.2rem] mt-[30px] leading-[3.5rem] md:leading-[4rem] font-semibold">
            Charge Two Devices at the Same Time With This Magnetic Wireless
            Charging Dock
          </h2>
          <div className="flex mt-[50px] w-full">
            <div className="flex gap-6">
              <div>
                <Image
                  src="/avatar.png"
                  alt="avatar"
                  width={48}
                  height={48}
                  className="rounded-full w-full"
                />
              </div>
              <p className="mt-4 text-[16px] leading-[19.2px] font-normal">
                Cameron Williamson
              </p>
            </div>
          </div>
        </div>
        <div className="flex-col p-0 md:p-[24px] w-full md:w-1/2">
          <Image src="/post.jpg" alt="post" width={600} height={600} />
        </div>
      </div>
      <div className="flex mt-[15px] md:mt-0 gap-6 items-center">
        <div className="flex items-center gap-1">
          <MdOutlineFavoriteBorder />
          <p className="text-[16px] font-normal">521K</p>
        </div>
        <div className="flex items-center gap-1">
          <BiMessageRounded />
          <p className="text-[16px] font-normal">213</p>
        </div>
        <div className="flex items-center gap-1">
          <AiOutlineShareAlt />
          <p className="text-[16px] font-normal">80</p>
        </div>
      </div>
      <div className="flex flex-col items-center py-[6.5rem] w-full">
        <div className="flex justify-center">
          <p className="text-[16px] leading-[30px] text-[#515151]">
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. Iterative approaches to corporate strategy foster
            collaborative thinking to further the overall value proposition.
            Organically grow the holistic world view of disruptive innovation
            via workplace diversity and empowerment. Bring to the table win-win
            survival strategies to ensure proactive domination. At the end of
            the day, going forward, a new normal that has evolved from
            generation X is on the runway heading towards a streamlined cloud
            solution. User generated content in real-time will have multiple
            touchpoints for offshoring. Capitalize on low hanging fruit to
            identify a ballpark value added activity to beta test. Override the
            digital divide with additional clickthroughs from DevOps.
            Nanotechnology immersion along the information highway will close
            the loop on focusing solely on the bottom line. Leverage agile
            frameworks to provide a robust synopsis for high level overviews.
            Iterative approaches to corporate strategy foster collaborative
            thinking to further the overall value proposition. Organically grow
            the holistic innovation via workplace diversity and empowerment.
            Bring to the table win-win survival strategies to ensure proactive
            domination. At the end of the day, going forward, a new normal that
            has evolved from generation X is on the runway heading towards a
            streamlined cloud solution. content in real-time will have multiple
            touchpoints for offshoring. Capitalize on low hanging fruit to
            identify a ballpark value added activity to beta test. Override the
            digital divide with additional clickthroughs from DevOps.
            Nanotechnology immersion along the information Leverage agile
            frameworks to provide a robust synopsis for high level overviews.
            Iterative approaches to corporate strategy foster collaborative
            thinking to further the overall value proposition. Organically grow
            the holistic world view of disruptive innovation via workplace
            diversity and empowerment.<br></br><br></br> Leverage agile frameworks to provide a
            robust synopsis for high level overviews. Iterative approaches to
            corporate strategy foster collaborative thinking to further the
            overall value proposition. Organically grow the holistic world view
            of disruptive innovation via workplace diversity and empowerment.
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. approaches to corporate strategy foster
            collaborative thinking to further the overall value proposition.
            Organically grow the holistic world view of disruptive innovation
            via workplace diversity and empowerment.
          </p>
        </div>
      </div>
    </div>
    <Subscription />
    </>
  );
};

export default page;
