import Image from "next/image";
import Link from "next/link";
import React from "react";

type Article = {
  title: string;
  description: string;
  urlToImage?: string;
  publishedAt: string;
};

interface TopStoriesCardProps {
  news: Article;
}

const TopStoriesCard: React.FC<TopStoriesCardProps> = ({ news }) => {
  return (
    <Link href={`/news/${encodeURIComponent(news.publishedAt)}`}>
      <div className=" w-full h-[11rem] mt-[4rem] flex rounded-[14px] bg-[#F7FDFE] border border-[#ADADC3]">
        <div className=" flex justify-between  w-[14.75rem] h-[6.6rem] my-[2.3rem] ml-[2.75rem] ">
          <div className="w-[7.7rem]  h-[6.6rem] text-[12px] text-[#5B5B79] ">
            <div className="title1">{news.title}</div>

            <div className="description1">{news.description}</div>
          </div>
          <div className="h-[6.6rem]">
            <Image
              className="rounded-[14px]  h-[88px] w-[88px] mt-2"
              src={news.urlToImage || "/cloudTopNews.png"}
              alt={news.title}
              width={88}
              height={88}
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default TopStoriesCard;
