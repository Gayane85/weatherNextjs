import React from "react";
import TopStoriesCard from "../topStoriesCard/TopStoriesCard";
import TopStoriesButton from "../topStoriesButton/TopStoriesButton";

type Article = {
  title: string;
  description: string;
  urlToImage?: string;
  publishedAt: string;
};

interface StoriesSectionProps {
  news: Article[];
}
const StoriesSection: React.FC<StoriesSectionProps> = ({ news }) => {
  return (
    <div>
      <div className=" relative mt-8 ml-12  w-[20rem] h-[40rem] border-blue-500">
        <div className="text-[#51808E] font-serif font-normal text-3xl ">
          Top Stories
        </div>
        <div className="mt-20">
          {news.map((item, index) => (
            <TopStoriesCard key={index} news={item} />
          ))}
        </div>
        <div className="  absolute bottom-0  right-0">
          <TopStoriesButton text={"View More"} />
        </div>
      </div>
    </div>
  );
};

export default StoriesSection;
