import React from "react";

interface HourTempProps {
  time: string;
  temp: number;
  icon: string;
}

const HourTemp: React.FC<HourTempProps> = ({ time, temp, icon }) => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center w-20 h-30 bg-[#ffffff]/20 rounded-md p-2 mt-6">
      <span className="text-sm text-white ">{time}</span>
      <div className="border w-full border-white/20"></div>
      <div className=" flex rounded-sm w-9 h-9 items-center justify-center bg-white/30">
        <img src={icon} alt="weather icon" className="w-full h-full" />
      </div>
      <span className="text-xs  font-bold text-white">{temp}°C</span>
    </div>
  );
};

export default HourTemp;
