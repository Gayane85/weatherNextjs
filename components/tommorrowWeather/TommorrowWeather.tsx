import { DailyData } from "@/api";
import React from "react";

interface TommorrowWeatherProps {
  dailyData: DailyData[];
}

const TommorrowWeather: React.FC<TommorrowWeatherProps> = ({ dailyData }) => {
  return (
    <div>
      {dailyData.slice(2, 3).map((item, index) => (
        <div
          key={index}
          className="flex justify-between   items-center py-4 text-[#5B5B79] font-normal font-serif"
        >
          <div>
            <div className=" text-xl">Tommorow</div>
            <div className="text-xs text-gray-500">
              {item.month.slice(0, 3)} {item.dayOfMonth}
            </div>
          </div>
          <div className="w-[1.5rem] text-xl h-[1.5rem] ">
            {Math.round(item.avgTemp)}°
          </div>
          <div className="text-2xl pr-[1.85rem]">
            <img src={item.icon} alt="icon" width={30} height={30} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TommorrowWeather;
