"use client";
import BackgroundImage from "../backgroundImage/BackgroundImage";
import SearchPlace from "../searchPlace/SearchPlace";
import RecentLocations from "../recentLocations/RecentLocations";
import { useState } from "react";
import HourlyChart from "../hourlyChart/HourlyChart";
import WeeklyChart from "../weeklyChart/WeeklyChart";
import WeatherRadar from "../weatherRadar/WeatherRadar";
import HeavyRain from "../heavyRain/HeavyRain";

interface Location {
  name: string;
  country: string;
  temperature: number;
}

const BackgroundWrap = () => {
  const [recentLocation, setRecentLocation] = useState<Location[]>([]);
  const [hourlyData, setHourlyData] = useState<any[]>([]);
  const [dailyData, setDailyData] = useState<any[]>([]);

  const addLocation = (location: Location, hourlyData: any, dailyData: any) => {
    setRecentLocation([location]);
    setHourlyData(hourlyData);
    setDailyData(dailyData);
  };

  return (
    <div>
      <BackgroundImage>
        <div className="relative w-full h-full">
          <SearchPlace addLocation={addLocation} />
          <RecentLocations locations={recentLocation} />
        </div>
      </BackgroundImage>
      <div className="bg-[#E1EAEC]">
        <div className="flex justify-around items-stretch gap-6">
          <div className="flex items-center">
            <HourlyChart data={hourlyData} />
          </div>
          <div className="flex items-center">
            <WeatherRadar dailyData={dailyData} />
          </div>
        </div>

        <WeeklyChart data={dailyData} />
        <HeavyRain />
      </div>
    </div>
  );
};

export default BackgroundWrap;
