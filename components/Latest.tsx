"use client";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import type { RootState } from "@/redux/store";
import type { AppDispatch } from "@/redux/store";
import { useSelector, useDispatch } from "react-redux";
import { getLatestNews } from "@/redux/features/latestNewsSlice";
import Link from "next/link";
import { format } from "date-fns";

interface titleProp {
  title: string;
}

interface newsProp {
  id: string;
  name: string;
}

const MAX_TITLE_LENGTH = 50;
const MAX_DESCRIPTION_LENGTH = 130;
const MAX_CATEGORY_LENGTH = 10;

const newsSources: newsProp[] = [
  { id: 'bbc-news', name: "BBC NEWS" },
  { id: 'cnn', name: "CNN" },
  { id: 'reuters', name: "REUTERS" },
  { id: 'abc-news', name: "ABC NEWS" },
  { id: 'the-verge', name: "THE VERGE" },
  { id: 'the-washington-post', name: "WASHINGTON POST" },
];

const Latest: React.FC<titleProp> = ({ title }) => {
  const dispatch: AppDispatch = useDispatch();
  const latestNews = useSelector(
    (state: RootState) => state.news.latestNews?.articles
  );
  const [selectedSource, setSelectedSource] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;
  const handlePageChange = (selectedPage: any) => {
    setCurrentPage(selectedPage.selected);
  };
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedNews = latestNews?.slice(startIndex, endIndex);

  const handleSourceChange = (e) => {
    const selectedValue = e.target.value
    setSelectedSource(selectedValue);
    dispatch(getLatestNews(selectedValue));
  };

  const handleAllPosts = () => {
    dispatch(getLatestNews(''))
    setSelectedSource('')
  }

  return (
    <div className="py-[6.5rem] mx-[2rem] md:mx-[6.5rem]">
      <div className="flex justify-between items-center mb-[65px]">
        <h2 className="text-[25px] md:text-[31px] font-semibold">{title}</h2>
        <div className="flex gap-2">
          <select
            value={selectedSource}
            onChange={handleSourceChange}
            className="border border-gray-300 w-[130px] py-[12px] text-[16px] rounded-md focus:outline-none"
          >
            <option>Select source</option>
            {newsSources.map((source) => (
              <option key={source.id} value={source.id}>
                {source.name}
              </option>
            ))}
          </select> 
            <button onClick={handleAllPosts} className="hidden md:flex rounded-[8px] px-[16px] md:px-[24px] md:py-[14px] text-[16px] text-white bg-lightOrange">
              View All
            </button> 
        </div>
      </div>
      <div className="grid gap-[1rem] mx-auto justify-center md:mx-0 md:grid-cols-4 mb-8">
        {paginatedNews?.map((news) => (
          <div key={news.id} className="mb-4">
            <img
              src={news?.urlToImage || "/card.png"}
              alt="news"
              className="z-5 md:w-[296px] h-[150px] object-cover w-full"
            />
            <div
              className="flex items-center bg-lightOrange text-white rounded-0 px-[10px] py-[8px]"
              style={{ width: "max-content" }}
            >
              <p className="text-white text-[14px] uppercase font-semibold">
                {" "}
                {news.source.name?.length > MAX_CATEGORY_LENGTH
                  ? `${news.source.name.substring(0, MAX_CATEGORY_LENGTH)}...`
                  : news.source.name}
              </p>
            </div>
            <a href={news.url} target="_blank" className="hover:underline">
              <h2 className="text-[24px] mt-[30px] mb-2 font-semibold">
                {news.title?.length > MAX_TITLE_LENGTH
                  ? `${news.title.substring(0, MAX_TITLE_LENGTH)}...`
                  : news.title}
              </h2>
            </a>
            <p
              className="text-[16px] mb-[16px] text-[#515151]] font-normal"
              dangerouslySetInnerHTML={{
                __html:
                  news.description?.length > MAX_DESCRIPTION_LENGTH
                    ? `${news.description.substring(
                        0,
                        MAX_DESCRIPTION_LENGTH
                      )}...`
                    : news.description,
              }}
            ></p>
            <div>
              <p className="text-[#9A9AB0] text-[12px]">{news.author}</p>
              <p className="text-[#9A9AB0] text-[12px] mt-2">
                {format(new Date(news.publishedAt), "MMM dd yyyy")}
              </p>
            </div>
          </div>
        ))}
      </div>
      <ReactPaginate
        pageCount={Math.ceil(latestNews?.length / itemsPerPage)}
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
