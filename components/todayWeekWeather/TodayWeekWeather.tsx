"use client";
import { DailyData, HourlyDada } from "@/api";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import TommorowWeather from "../tommorrowWeather/TommorrowWeather";

interface TodayWeekWeatherProps {
  hourlyData: HourlyDada[];
  dailyData: DailyData[];
}

const TodayWeekWeather: React.FC<TodayWeekWeatherProps> = ({
  hourlyData,
  dailyData,
}) => {
  const [currentTime, setCurrentTime] = useState<number>(new Date().getHours());
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);
  const currentHourData = [
    ...hourlyData.slice(currentTime),
    ...hourlyData.slice(0, currentTime),
  ];

  // const currentHour = new Date().getUTCHours();
  // const currentHourData = [
  //   ...hourlyData.slice(currentHour),
  //   ...hourlyData.slice(0, currentHour),
  // ];

  console.log("amen jami hamar", currentHourData);
  return (
    <div className="relative w-[36.75rem] h-[75.12rem] ml-[5.18rem] mt-[3.37rem] border border-gray-100 rounded-[14px] overflow-hidden shadow-lg">
      <div className="relative w-full h-[18.35rem]">
        <Image
          src="/todayRain.png"
          alt="Rain Background"
          layout="fill"
          objectFit="cover"
          className="opacity-80  backdrop-blur-[25px]"
        />

        <div className="absolute inset-0 flex flex-col pt-[2.46rem] justify-between p-4">
          <div className="flex justify-between  text-white text-xl font-normal font-serif">
            <span className="cursor-pointer ml-[4.77rem]">{"<"}</span>
            <span>This Week</span>
            <span className="cursor-pointer mr-[7rem]">{">"}</span>
          </div>

          <div className="ml-[3rem] text-xl font-normal font-serif text-[#FFFFFF] ">
            Today
          </div>

          <div className="flex  mx-[3rem] mb-[1rem]  justify-between text-white text-sm mt-4">
            {currentHourData.slice(0, 1).map((data, index) => (
              <div key={index}>
                <div className="w-[68px] h-[82px]  bg-[#E2E8EA66] bg-opacity-40 rounded-md flex flex-col items-center justify-around text-white text-base font-serif font-normal">
                  <span>Now</span>
                  <img src={data.icon} className="w-[25px] h-[25px]" />
                  {/* <Image src={data.icon} alt="icon" width={25} height={25} /> */}
                  <span>{Math.round(data.temp_c)}°</span>
                </div>
              </div>
            ))}
            {currentHourData.slice(1, 5).map((data, index) => (
              <div key={index}>
                <div className=" w-[68px] h-[82px] flex flex-col items-center text-base  justify-around">
                  <span>{data.time}</span>
                  <span>
                    <img
                      src={data.icon}
                      alt="icon"
                      className="bg-[#E2E8EA66] w-[25px] h-[25px]"
                    />
                  </span>
                  <span>{Math.round(data.temp_c)}°</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-[#FFFFFF] w-full pt-[4rem] space-y-[2.62rem] h-[56.75rem] px-[3.75rem] pr-[7.93rem]">
        <TommorowWeather dailyData={dailyData} />
        {dailyData.slice(3).map((item, index) => (
          <div
            key={index}
            className="flex justify-between   items-center py-4 text-[#5B5B79] font-normal font-serif"
          >
            <div>
              <div className=" text-xl">{item.dayOfWeek}</div>
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
    </div>
  );
};

export default TodayWeekWeather;
