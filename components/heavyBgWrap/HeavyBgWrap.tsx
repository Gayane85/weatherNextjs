import React from "react";
import HeavyBackground from "../heavyBackground/HeavyBackground";
import HourTemp from "../hourTemp/HourTemp";
import WeeksDays from "../weeksdays/WeeksDays";
import { DailyData, HourlyDada, Location } from "@/api";

interface HeavyBgWrapProps {
  dailyData: DailyData[];
  hourlyData: HourlyDada[];
  locations: Location[];
}

const HeavyBgWrap: React.FC<HeavyBgWrapProps> = ({
  hourlyData,
  dailyData,
  locations,
}) => {
  console.log(hourlyData);
  console.log(dailyData);
  const currentHour = new Date().getUTCHours();
  const currentHourData = [
    ...hourlyData.slice(currentHour),
    ...hourlyData.slice(0, currentHour),
  ];

  console.log("currentHourData", currentHourData);
  return (
    <div className="relative mx-auto w-[1342px] h-[692px] ">
      <HeavyBackground>
        <div>
          <div className="absolute top-10 left-10 z-20">
            <h1 className="text-[#FFFFFF]/50 mt-64 text-right font-bold font-serif text-3xl pt-3 mr-0 ">
              Heavy Rain
            </h1>
            <div className=" flex mt-5 mr-0 bg-[#FFFFFF]/50 h-0.5 rounded-md"></div>
            <div className="flex space-x-3 ">
              {currentHourData.slice(0, 10).map((hour, index) => (
                <div key={index} className="">
                  <HourTemp
                    time={hour.time}
                    temp={hour.temp_c}
                    icon={hour.icon}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className=" h-max-screen mt-0">
          <WeeksDays
            locations={locations}
            dailyData={dailyData}
            hourlyData={hourlyData}
          />
        </div>
      </HeavyBackground>
    </div>
  );
};

export default HeavyBgWrap;
