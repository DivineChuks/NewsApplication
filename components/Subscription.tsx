import React from "react";

const Subscription = () => {
  return (
    <div id="newsletter" className="flex flex-col py-[6.5rem] md:mx-[6.5rem]">
      <div className="flex-col bg-lightBlue px-[2rem] md:px-[6.5rem] py-[6.5rem] text-white">
        <div className="flex flex-col md:flex-row justify-between items-center w-full">
          <h2 className="text-[32px] md:text-[40px] mb-4 font-medium w-full md:w-1/2">
            Sign Up For Our Newsletters
          </h2>
          <p className="text-[16px] w-full md:w-1/2 font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod.
          </p>
        </div>
        <div className="w-full mt-4 md:mt-[4rem] flex-col flex md:flex-row gap-[8px] items-center">
            <input
              className="w-full md:w-[80%] mb-2 md:mb-0 mt-1 focus:outline-none text-[14px] px-[1.5rem] py-[1rem] text-[#000000E5] font-normal rounded-md"
              placeholder="input your email address here"
            />
            <button className="bg-lightOrange md:flex-grow w-full md:w-auto px-[15px] py-[14px] md:px-[24px] rounded-md md:py-[1rem]">Subscribe Now</button>
          </div>
      </div>
    </div>
  );
};

export default Subscription;
