import type { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { format } from "date-fns";

const MAX_DESCRIPTION_LENGTH = 130;
const MAX_AUTHOR_LENGTH = 20

const Recommended = () => {
  const businessNews = useSelector(
    (state: RootState) => state.business.businessNews?.articles
  );

  return (
    <div
      id="top-stories"
      className="pt-[4.5rem] bg-[#f9f9f9] pb-[6.5rem] px-[2rem] md:px-[6.5rem]"
    >
      <div className="flex mb-[65px]">
        <h2 className="text-[31px] font-semibold">Top Stories</h2>
      </div>
      <div className="grid grid-cols-1 gap-[1rem] md:grid-cols-3">
        {businessNews?.map((news, index) => (
          <div key={index}>
            <div className="mb-4">
              <img
                src={news?.urlToImage || "/card.jpg"}
                alt="avatar"
                className="w-full h-[250px] md:h-[150px] object-cover"
              />
              <div
                className="flex items-center bg-lightOrange text-white rounded-0 px-[10px] py-[6px]"
                style={{ width: "max-content" }}
              >
                <p className="text-white text-[10px] uppercase font-semibold">
                  {news?.source.name}
                </p>
              </div>
              <a href={news.url} className="hover:underline cursor-pointer">
                <p className="text-[16px] mt-4 font-semibold leading-[19px]">
                  {news?.title}
                </p>
              </a>
              <p
              className="text-[16px] mt-4 mb-[16px] text-[#515151]] font-normal"
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
  );
};

export default Recommended;
