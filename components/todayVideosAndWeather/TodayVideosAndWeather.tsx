import React from "react";
import WeatherVideos from "../weatherVideos/WeatherVideos";
import TodayWeekWeather from "../todayWeekWeather/TodayWeekWeather";
import { DailyData, HourlyDada } from "@/api";

interface TodayVideosAndWeatherProps {
  hourlyData: HourlyDada[];
  dailyData: DailyData[];
}

const TodayVideosAndWeather: React.FC<TodayVideosAndWeatherProps> = ({
  hourlyData,
  dailyData,
}) => {
  return (
    <div>
      <div className=" relative w-[90rem] h-[82.3rem] mt-[3.75rem] mb-[4rem] rounded-[14px] flex bg-[#EFF3F6] ">
        <WeatherVideos />
        <TodayWeekWeather hourlyData={hourlyData} dailyData={dailyData} />
      </div>
    </div>
  );
};

export default TodayVideosAndWeather;
