import Subscription from '@/components/Subscription'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='px-[6.5rem] bg-[#f9f9f9] text-dark py-[5rem]'>
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
          <div className="flex mt-[50px]">
            <div className="flex gap-6">
              <div>
                <Image src="/card.png" alt="avatar" width={48} height={48} className='rounded-full' />
              </div>
              <p className="mt-4 text-[16px] leading-[19.2px] font-normal">
              Cameron Williamson
              </p>
            </div>
          </div>
        </div>
        <div className="flex-col p-[24px] w-1/2">
           <h2>Hello</h2>
        </div>
      </div>

        <Subscription />
    </div>
  )
}

export default page