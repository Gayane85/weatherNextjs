"use client";
import { DailyData, HourlyDada, Location } from "@/api";
import TodayChartAndBlocks from "@/components/todayChartAndBlocks/TodayChartAndBlocks";
import TodayVideosAndWeather from "@/components/todayVideosAndWeather/TodayVideosAndWeather";
import TodayWeatherForecast from "@/components/todayWeatherForecast/TodayWeatherForecast";
import React, { useState } from "react";

const Today = () => {
  const [recentLocation, setRecentLocation] = useState<Location[]>([]);
  const [dailyData, setDailyData] = useState<DailyData[]>([]);
  const [hourlyData, setHourlyData] = useState<HourlyDada[]>([]);

  console.log("norDailyData:", dailyData);

  const addLocation = (
    location: Location,
    dailyData: DailyData[],
    hourlyData: HourlyDada[]
  ) => {
    setRecentLocation([location]);
    setDailyData(dailyData);
    setHourlyData(hourlyData);
  };

  return (
    <div>
      <TodayWeatherForecast addLocation={addLocation} />
      <TodayChartAndBlocks location={recentLocation} dailyData={dailyData} />
      <TodayVideosAndWeather hourlyData={hourlyData} dailyData={dailyData} />
    </div>
  );
};

export default Today;
