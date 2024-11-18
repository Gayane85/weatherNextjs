"use client";
import { DailyData, HourlyDada, Location } from "@/api";
import BackgroundImage from "@/components/backgroundImage/BackgroundImage";
import BlogNews from "@/components/blogNews/BlogNews";
import EuropeanWeatherMap from "@/components/europeanWeathetMap/EuropeanWeatherMap";
import HeavyBgWrap from "@/components/heavyBgWrap/HeavyBgWrap";
import HourlyChart from "@/components/hourlyChart/HourlyChart";
import RecentLocations from "@/components/recentLocations/RecentLocations";
import SearchPlace from "@/components/searchPlace/SearchPlace";
import WeatherRadar from "@/components/weatherRadar/WeatherRadar";
import WeeklyChart from "@/components/weeklyChart/WeeklyChart";
import { useState } from "react";

export default function Home() {
  const [recentLocation, setRecentLocation] = useState<Location[]>([]);
  const [hourlyData, setHourlyData] = useState<HourlyDada[]>([]);
  const [dailyData, setDailyData] = useState<DailyData[]>([]);

  const addLocation = (
    location: Location,
    hourlyData: HourlyDada[],
    dailyData: DailyData[]
  ) => {
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
      <div className="bg-[#E1EAEC] pb-14 rounded-[14px]">
        <div className="flex justify-around items-stretch mx-10 gap-10">
          <div className="flex mx-auto w-full h-15 mt-10 items-center">
            <WeeklyChart data={dailyData} />
          </div>
          <div className="flex items-center">
            <WeatherRadar dailyData={dailyData} />
          </div>
        </div>
        <div className="w-[1342px] mx-auto">
          <HourlyChart data={hourlyData} />
        </div>

        <HeavyBgWrap
          locations={recentLocation}
          hourlyData={hourlyData}
          dailyData={dailyData}
        />
      </div>
      {/* <BlogNews /> */}
      <EuropeanWeatherMap />
    </div>
  );
}
