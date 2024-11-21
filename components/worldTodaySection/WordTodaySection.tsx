import React from "react";
import TopStoriesCard from "../topStoriesCard/TopStoriesCard";
import TopStoriesButton from "../topStoriesButton/TopStoriesButton";

type Article = {
  title: string;
  description: string;
  urlToImage?: string;
  publishedAt: string;
};

interface WordTodaySectionProps {
  article: Article[];
}

const WordTodaySection: React.FC<WordTodaySectionProps> = ({ article }) => {
  return (
    <div>
      <div>
        <div className=" relative mt-[5rem] ml-12  w-[20rem] h-[55rem] ">
          <div className="text-[#51808E] font-serif font-normal text-3xl ">
            The World Today
          </div>
          <div className="mt-20">
            {article.map((news, index) => (
              <TopStoriesCard key={index} news={news} />
            ))}
          </div>
          <div className="  absolute bottom-0  right-0">
            <TopStoriesButton text={"Veiw More"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordTodaySection;
