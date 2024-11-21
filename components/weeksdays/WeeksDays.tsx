import React from "react";
import Locations from "../icons/locations/Locations";
import ArrowDown from "../icons/arrowDown/ArrowDown";

import DayOfWeek from "../dayOfWeek/DayOfWeek";
import { DailyData, HourlyDada, Location } from "@/api";

interface WeekDaysProps {
  dailyData: DailyData[];
  hourlyData: HourlyDada[];
  locations: Location[];
}

const WeeksDays: React.FC<WeekDaysProps> = ({
  dailyData,
  hourlyData,
  locations,
}) => {
  console.log(hourlyData);
  console.log("WeeksDya:", dailyData);
  return (
    <div className=" text-white flex flex-col  mt-0 w-[310px] h-screen bg-[#D9D9D966] rounded-md p-0 z-20">
      {locations.map((location, index) => (
        <div key={index}>
          <div className=" flex justify-center pt-5">
            <div className=" flex w-[221px] h-[58px] pt-1 text-center items-center pl-2 border border-white rounded-lg">
              <Locations />
              <div className="">
                {location.name},{location.country}
              </div>
              <div className="pl-5 pr-1">
                <ArrowDown />
              </div>
            </div>
          </div>
          <div className="relative mt-5 items-center gap-2  text-white flex flex-col">
            <div className="text-5xl font-normal  font-serif">
              {location.temperature}°C
            </div>
            <div>Northwest, {location.wind_speed} km/h</div>
          </div>
        </div>
      ))}
      <div className="border border-white my-[24px] ml-[20px] mr-[60px]"></div>
      <div className="ml-[24px]">
        <div>The Next Days Foricast</div>
        <div className=" flex mt-2 gap-2">
          <button className="bg-[#D9D9D966]/70 text-center rounded-md h-8 w-20">
            7 Days
          </button>
          <button className="bg-[#D9D9D966]/30 rounded-md w-20">14 Days</button>
          <button className="bg-[#D9D9D966]/30 rounded-md w-20">31 Days</button>
        </div>
      </div>
      <div className="ml-[24px] mt-[20px]">
        <div className="flex cols-2">
          <div className=" space-y-3">
            {dailyData.slice(2, 6).map((day, index) => (
              <div key={index}>
                <DayOfWeek
                  dayOfWeek={day.dayOfWeek}
                  month={day.month}
                  dayOfMonth={day.dayOfMonth}
                  maxTemp={day.maxTemp}
                  minTemp={day.minTemp}
                  icon={day.icon}
                  conditionText={day.conditionText}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeksDays;
