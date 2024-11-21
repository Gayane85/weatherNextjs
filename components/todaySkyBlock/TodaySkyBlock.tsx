"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Locations from "../icons/locations/Locations";
import SolarWind from "../icons/solarWind/SolarWind";
import DropIcon from "../icons/dropIcon/DropIcon";
import ChartForToday from "../chartForToday/ChartForToday";
import { Location } from "@/api";

interface TodaySkyBlockProps {
  location: Location[];
}

const TodaySkyBlock: React.FC<TodaySkyBlockProps> = ({ location }) => {
  const [time, setTime] = useState<string>("");
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
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
  return (
    <div className=" ">
      <div className="relative w-[1219px] h-[464px] mx-auto">
        <Image
          src="/todaySky.jpeg"
          alt="Weather Sky"
          layout="fill"
          className="absolute inset-0 rounded-[14px]"
        />

        {location.map((location, index) => (
          <div
            key={index}
            className="absolute top-0 left-0 text-white z-40 w-[34.8rem] h-[23rem] mt-[3rem] ml-[3.25rem] border border-green-900"
          >
            <div className="text-xl flex font-serif">
              <Locations />
              {location.name}
            </div>
            <div className="relative flex justify-center mt-12">
              <div className=" w-[8.1rem] h-[8rem] flex flex-col items-center justify-center">
                <div className="font-normal text-[4rem]">
                  {Math.round(location.temperature)}°C
                </div>
                <div className="font-normal text-[1.25rem]">
                  {location.description}
                </div>
              </div>
            </div>

            <div className="absolute font-serif grid grid-cols-3 gap-x-[5.8rem] px-auto bottom-0 left-0 text-white z-40  pl-[1.3rem] ">
              <div className="text-xl flex text-start ">
                <SolarWind />
                {location.pressure_hpa} hpa
              </div>
              <div className="text-xl flex text-center">
                <DropIcon />
                {location.humidity}%
              </div>
              <div className="text-xl flex text-end">
                <SolarWind />
                {location.wind_speed} km/h
              </div>
            </div>
            <div className="absolute right-0 top-0 text-white z-40  ">
              <div className="text-xl">Today {time}</div>
            </div>
          </div>
        ))}
        <div className="absolute right-[3.3rem] mt-[3rem]  w-[26.6rem] h-[23rem] border border-green-900">
          Temperature Chart
          <div className="">
            <ChartForToday />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodaySkyBlock;
