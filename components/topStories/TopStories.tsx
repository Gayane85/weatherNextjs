import React from "react";

import StoriesSection from "../storiesSection/StoriesSection";
import WordTodaySection from "../worldTodaySection/WordTodaySection";

type Article = {
  title: string;
  description: string;
  urlToImage?: string;
  publishedAt: string;
};
type TopStoriesProps = {
  topStories: Article[];
  wordToday: Article[];
};

const TopStories: React.FC<TopStoriesProps> = ({ topStories, wordToday }) => {
  return (
    <div>
      <div className=" w-[30rem] h-[114rem] bg-[#ECF3F6] pr-[3rem] rounded-[14px] mr-[15rem] ">
        <div>
          <StoriesSection news={topStories} />
          <WordTodaySection article={wordToday} />
        </div>
      </div>
    </div>
  );
};

export default TopStories;
