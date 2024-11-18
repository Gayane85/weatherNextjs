import React from "react";

type NewsTitleProps = {
  titles: string[];
};

const NewsTitle: React.FC<NewsTitleProps> = ({ titles }) => {
  return (
    <div>
      <div className=" relative top-0 flex w-full">
        {titles.slice(0, 1).map((title, index) => (
          <div key={index} className="text-[2rem]  text-[#51808E]">
            {title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsTitle;
