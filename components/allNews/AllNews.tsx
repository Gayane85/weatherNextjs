import React from "react";
import HurricaneCenter from "../hurricaneCenter/HurricaneCenter";

type Article = {
  title: string;
  description: string;
  urlToImage?: string;
  publishedAt: string;
};
type AllNewsProps = {
  news: Article[];
};

const AllNews: React.FC<AllNewsProps> = ({ news }) => {
  const chunks = [];
  for (let i = 0; i < news.length; i += 3) {
    chunks.push(news.slice(i, i + 3));
  }
  return (
    <div id="allNews">
      <div className="w-[52rem] h-[114rem] space-y-6">
        {chunks.map((chunk, index) => (
          <HurricaneCenter key={index} article={chunk} />
        ))}
      </div>
    </div>
  );
};

export default AllNews;
