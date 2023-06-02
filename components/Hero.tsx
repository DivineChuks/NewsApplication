import React from "react";
import type { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { format } from "date-fns";

const MAX_AUTHOR_LENGTH = 20;

const Hero = () => {
  const businessNews = useSelector(
    (state: RootState) => state.business.businessNews?.articles
  );

  const heroArticle = useSelector(
    (state: RootState) => state.business.businessNews?.articles[1]
  );

  return (
    <div
      id="home"
      className="px-[2rem] md:px-[6.5rem] bg-[#f9f9f9] text-dark py-[6rem] flex-col"
    >
      <div className="flex flex-col md:flex-row justify-between gap-[6rem] md:gap-[4rem] w-full">
        <div className="flex flex-col w-full md:w-1/2">
          <div>
            <div className="md:mt-[2rem]">
              <img
                src={heroArticle?.urlToImage || "card.jpg"}
                className="w-full h-[350px] object-cover"
              />
            </div>
            <a
              href={heroArticle?.url}
              className="hover:underline cursor-pointer"
            >
              <h2 className="text-[1.5rem] md:text-[2rem] mt-[20px] mb-[10px] leading-[2rem] md:leading-[2.5rem] font-semibold">
                {heroArticle?.title}
              </h2>
            </a>
            <div
              className="flex items-center bg-lightOrange text-white mb-[15px] mt-2 rounded-0 px-[10px] py-[6px]"
              style={{ width: "max-content" }}
            >
              <p className="text-white text-[10px] uppercase font-semibold">
                {heroArticle?.source.name}
              </p>
            </div>
            <div className="flex gap-4 md:mb-[20px] ">
              <span className="text-[#9A9AB0] text-[12px]">
                {heroArticle?.author.length > MAX_AUTHOR_LENGTH
                  ? `${heroArticle?.author.substring(0, MAX_AUTHOR_LENGTH)}...`
                  : heroArticle?.author}&nbsp;
              </span>
              {heroArticle?.publishedAt && (
                <span className="text-[#9A9AB0] text-[12px]">
                  {format(new Date(heroArticle?.publishedAt), "MMM dd yyyy")}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="flex-col p-0 md:p-[24px] w-full md:w-1/2">
          <h2 className="text-[25px] font-semibold z-10">BUSINESS NEWS</h2>
          {businessNews?.map((news, index) => (
            <div
              key={index}
              className="grid md:grid-cols-2 gap-8 items-center mt-[24px]"
            >
              <div className="">
                <img
                  src={news?.urlToImage || "/card.jpg"}
                  alt="avatar"
                  className="w-full h-[200px] md:h-[150px] object-cover"
                />
              </div>
              <div className="flex gap-[16px] flex-col">
                <div
                  className="flex items-center bg-lightOrange text-white rounded-0 px-[10px] py-[6px]"
                  style={{ width: "max-content" }}
                >
                  <p className="text-white text-[10px] uppercase font-semibold">
                    {news?.source.name}
                  </p>
                </div>
                <a href={news.url} className="hover:underline cursor-pointer">
                  <p className="text-[16px] font-semibold leading-[19px]">
                    {news?.title}
                  </p>
                </a>
                <div>
                  <span className="text-[#9A9AB0] text-[12px]">
                  {news?.author.length > MAX_AUTHOR_LENGTH
                  ? `${news?.author.substring(0, MAX_AUTHOR_LENGTH)}...`
                  : news?.author}&nbsp;
                  </span>
                  <span className="text-[#9A9AB0] text-[12px] mt-2">
                    {format(new Date(news.publishedAt), "MMM dd yyyy")}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
