import Image from "next/image";
import Link from "next/link";
import React from "react";

export type Article = {
  title: string;
  description: string;
  urlToImage?: string;
  publishedAt: string;
};
type NewsCardProps = {
  news: Article;
};

const NewsCard: React.FC<NewsCardProps> = ({ news }) => {
  return (
    <div className="w-[14rem] h-[267px] mt-[4rem]">
      <div>
        <Image
          className="rounded-t-[14px] h-[7.75rem] "
          src={news.urlToImage || "/example.jpeg"}
          alt={news.title}
          width={224}
          height={124}
        />
      </div>
      <Link href={`/news/${encodeURIComponent(news.publishedAt)}`}>
        <div className=" flex flex-col pt-4 pl-3 text-left w-[14rem] border border-[#ADADC3] bg-[#ADADC3]/25 h-[143px] rounded-b-[14px]">
          <div className="title">{news.title}</div>
          <div className="description">{news.description}</div>
        </div>
      </Link>
    </div>
  );
};

export default NewsCard;
