import React from "react";
import NewsCard from "../newsCard/NewsCard";
import Link from "next/link";
import NewsTitle from "../newsTitle/NewsTitle";

type Article = {
  title: string;
  description: string;
  urlToImage?: string;
  publishedAt: string;
};
type HurricaneCenterProps = {
  article: Article[];
};

const HurricaneCenter: React.FC<HurricaneCenterProps> = ({ article }) => {
  const titles = [
    "HurricaneCenter",
    "Weather News",
    "Trending Today",
    "Space and Astronomy",
  ];
  console.log("HurricaneCenter:", article);
  return (
    <div>
      <div className="w-49 h-[26rem] relative">
        <div className="">
          <NewsTitle titles={titles} />
        </div>

        <div className="flex justify-between">
          {article.map((news, index) => (
            <NewsCard key={index} news={news} />
          ))}
        </div>

        <Link
          href="/"
          className="absolute  bottom-0 text-right right-2 text-[#41565C] text-2xl underline hover:text-[#41565C]/70"
        >
          View All
        </Link>
      </div>
    </div>
  );
};

export default HurricaneCenter;
