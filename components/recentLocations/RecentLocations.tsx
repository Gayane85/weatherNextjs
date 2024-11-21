"use client";

import React from "react";

interface Location {
  name: string;
  country: string;
  temperature: number;
  icon: string;
}
interface RecentLocationsProps {
  locations: Location[];
}

const RecentLocations: React.FC<RecentLocationsProps> = ({ locations }) => {
  console.log("RecentLocation:", locations);
  if (!locations || locations.length === 0) {
    return <div className="text-white text-lg">No recent locations found</div>;
  }
  return (
    <div className="flex gap-[10px] w-[222px] h-[188px] rounded-[28px] mt-[30px] text-white bg-opacity-20 backdrop-blur-[3px] bg-[#BACDD299] border focus:bg-[linear-gradient(91.39deg,_rgba(188,_93,_93,_0.4)_-_43.44%,_rgba(24,_16,_16,_0.2)_-_43.44%)] focus:outline-none">
      <div className="flex flex-col ml-[25px] w-[82px] h-[124px] px-0 my-auto gap-[14px]">
        <div className="w-[82px] h-[12px] text-[10px] font-[400]">
          Recent Locations
        </div>
        {locations.map((location, index) => (
          <div key={index} className="w-[82px] h-[55px] gap-[12px]">
            <h3>{location.name}</h3>
            <div className="text-xs font-400">
              {location.country || "Unknoun"}
            </div>
            <div className="flex items-center gap-4">
              <img
                src={location.icon}
                alt="weather icon"
                className=" w-[2rem] h-[2rem] pl-0"
              />
              <div className="w-[47px] h-[39px] text-2xl flex items-center justify-center">
                {Math.round(location.temperature)}&deg;C
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentLocations;
