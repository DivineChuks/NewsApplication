"use client";
import { latestNews, Latest } from "@/data";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Image from "next/image";
import Link from "next/link";

interface titleProp {
    title: string
}

const Latest:React.FC<titleProp> = ({title}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;
  const handlePageChange = (selectedPage: any) => {
    setCurrentPage(selectedPage.selected);
  };
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedNews = latestNews.slice(startIndex, endIndex);

  return (
    <div className="py-[6.5rem] mx-[2rem] md:mx-[6.5rem]">
      <div className="flex justify-between items-center mb-[65px]">
        <h2 className="text-[25px] md:text-[31px] font-semibold">{title}</h2>
        <div className="flex gap-2">
          <select className="border border-gray-300 py-[12px] text-[16px] rounded-md focus:outline-none">
            <option>Science</option>
            <option>Innovation</option>
            <option>Industry</option>
          </select>
          <Link href="/articles">
            <button className="hidden md:flex rounded-[8px] px-[16px] md:px-[24px] md:py-[16px] text-[16px] text-white bg-lightOrange">
              View All
            </button>
          </Link>
        </div>
      </div>
      <div className="grid gap-[1rem] mx-auto justify-center md:mx-0 md:grid-cols-4 mb-8">
        {paginatedNews.map((news: Latest) => (
          <div key={news.id} className="mb-4">
            <Image
              src="/news.png"
              alt="news"
              width={296}
              height={312}
              className="z-5 w-full relative"
            />
            <div className="flex absolute items-center bg-white text-dark w-[100px] rounded-0 px-[16px] drop-shadow-sm py-[14px] mt-[-1.8rem] z-10">
              <p>{news.category}</p>
            </div>
            <h2 className="text-[24px] mt-[30px] mb-2 font-semibold">
              {news.title}
            </h2>
            <p className="text-[16px] mb-[16px] text-[#515151]] font-normal">
              {news.description}
            </p>
            <div className="flex items-center gap-6">
              <p className="text-[#9A9AB0] text-[12px]">{news.author}</p>
              <p className="text-[#9A9AB0] text-[12px]">{news.date}</p>
            </div>
          </div>
        ))}
      </div>
      <ReactPaginate
        pageCount={Math.ceil(latestNews.length / itemsPerPage)}
        onPageChange={handlePageChange}
        previousLabel={"Previous"}
        nextLabel={"Next"}
        containerClassName="pagination"
        activeClassName="active"
        previousClassName="pagination-previous"
        nextClassName="pagination-next"
        disabledClassName="pagination-disabled"
      />
    </div>
  );
};

export default Latest;
