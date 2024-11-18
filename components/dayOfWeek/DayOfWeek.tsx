import React from "react";

interface DayOfWeekProps {
  dayOfWeek: string;
  month: string;
  dayOfMonth: string;
  maxTemp: number;
  minTemp: number;
  conditionText: string;
  icon: string;
}

const DayOfWeek: React.FC<DayOfWeekProps> = ({
  dayOfWeek,
  month,
  dayOfMonth,
  maxTemp,
  minTemp,
  conditionText,
  icon,
}) => {
  return (
    <div className="flex">
      <div className=" flex rounded-md w-14 h-14 items-center justify-center bg-white/30">
        <img src={icon} alt="weatherIcon" width={30} height={30} />
      </div>
      <div className="pl-3 py-1 mr-3 ">
        <div className="text-sm">
          {dayOfWeek}, {month} {dayOfMonth}
        </div>
        <div className="text-sm">{conditionText}</div>
      </div>
      <div className="flex left-3 ">
        <div className="w-px h-14   bg-white"></div>
        <div className="ml-1 mt-1 text-right text-sm">
          <div>{minTemp}</div>
          <div>{maxTemp}</div>
        </div>
      </div>
    </div>
  );
};

export default DayOfWeek;
