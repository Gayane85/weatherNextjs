import React from "react";

interface TopStoriesButtonProps {
  text: string;
}

const TopStoriesButton: React.FC<TopStoriesButtonProps> = ({ text }) => {
  return (
    <div className="w-[10.25rem] h-[3.3rem] hover:bg-[#B8D0D8] bg-[#549FB6] text-white text-xl font-normal flex items-center justify-center font-serif text-center rounded-[14px]">
      <button>{text}</button>
    </div>
  );
};

export default TopStoriesButton;
