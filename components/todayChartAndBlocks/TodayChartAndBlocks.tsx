import React from "react";
import TodaySkyBlock from "../todaySkyBlock/TodaySkyBlock";

import { DailyData, Location } from "@/api";
import WindSection from "../windSection/WindSection";
import PressureSection from "../pressureSection/PressureSection";
import UVIndexSection from "../uvIndexSection/UVIndexSection";
import RainChanceSection from "../rainChanceSection/RainChanceSection";

interface TodayChartAndBlocksProps {
  location: Location[];
  dailyData: DailyData[];
}

const TodayChartAndBlocks: React.FC<TodayChartAndBlocksProps> = ({
  location,
  dailyData,
}) => {
  return (
    <div className=" ">
      <div className=" relative flex flex-col  w-[1440px] mt-[3.75rem] h-[1149px] mx-auto ">
        <div className="  w-full h-full  bg-[#E6F2FC] rounded-[14px]  ">
          <div className="absolute ml-[6.87rem] mt-[3.37rem] z-20 w-[1219px] h-[464px] ">
            <TodaySkyBlock location={location} />
          </div>
          <div className="absolute mt-[36rem] z-20 ml-[6.87rem] ">
            {/* <BlocksSection /> */}
            <div className="w-[69.2rem]  h-[32.25rem] grid grid-cols-2 gap-[3rem]  ">
              <WindSection location={location} />
              <RainChanceSection dailyData={dailyData} />
              <PressureSection location={location} />
              <UVIndexSection dailyData={dailyData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayChartAndBlocks;
