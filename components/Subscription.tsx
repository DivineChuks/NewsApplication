import React from "react";

const Subscription = () => {
  return (
    <div className="flex flex-col py-[6.5rem] mx-[2rem] md:mx-[6.5rem]">
      <div className="flex-col bg-lightBlue px-[2rem] md:px-[6.5rem] py-[6.5rem] text-white">
        <div className="flex flex-col md:flex-row justify-between items-center gap-[4rem] w-full">
          <h2 className="text-[35px] md:text-[40px] font-medium w-full md:w-1/2">
            Sign Up For Our Newsletters
          </h2>
          <p className="text-[16px] w-full md:w-1/2 font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod.
          </p>
        </div>
        <div className="w-full mt-[4rem] flex gap-[8px] items-center">
            <input
              className="md:w-[80%] w-[65%] text-[14px] px-[1.5rem] py-[1rem] text-[#000000E5] font-normal rounded-md"
              placeholder="input your email address here"
            />
            <button className="bg-lightOrange flex-grow text-white rounded-md py-[14px] md:px-[24px] md:py-[15px]">Subscribe Now</button>
          </div>
      </div>
    </div>
  );
};

export default Subscription;
