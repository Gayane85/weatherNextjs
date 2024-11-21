import React from "react";

interface TodayVideoBlockProps {
  id: string;
  title: string;
}

const TodayVideoBlock: React.FC<TodayVideoBlockProps> = ({ id, title }) => {
  return (
    <div className=" relative w-[31.3rem] h-[17.1rem]  flex flex-col">
      <div className="w-[31.3rem] h-[14.1rem]  overflow-hidden rounded-[14px]">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${id}`}
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <p className="text-xl font-normal text-start pt-2 font-serif text-[#5B5B79]">
        {title}
      </p>
    </div>
  );
};

export default TodayVideoBlock;
