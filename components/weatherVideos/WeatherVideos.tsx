import React from "react";
import TodayVideoBlock from "../todayVideoBlock/TodayVideoBlock";

const WeatherVideos = () => {
  return (
    <div>
      <div className="w-[32.25rem] h-[70.25rem] flex flex-col mt-[3.37rem] ml-[8.87rem] ">
        <div className="w-[32.25] h-[8.5rem]  ">
          <div className="text-3xl font-normal font-serif text-[#51808E]">
            Weather Forecast Videos
          </div>
          <p className="pt-[2.37rem] text-xl font-normal font-serif text-[#5B5B79]">
            Watch the latest weather forecasts in video format. Stay up-to-date
            with accurate and informative videos.
          </p>
          <div className=" w-[51.3rem] h-[59.75rem] mt-[3.25rem] space-y-[3.25rem]">
            <TodayVideoBlock
              id="D8pnmwOXhoY"
              title="The Science Behind Extreme Weather Events"
            />
            <TodayVideoBlock
              id="QwLyscT3NgI"
              title="The Impact of Climate Change on Our Weather"
            />
            <TodayVideoBlock
              id="ymarrXoi0ZM"
              title="Weather Disasters and How to Stay Safe During Them"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherVideos;
