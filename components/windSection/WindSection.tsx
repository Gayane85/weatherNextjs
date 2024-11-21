import { Location } from "@/api";
import Image from "next/image";
import React from "react";

interface WindSectionProps {
  location: Location[];
}

const WindSection: React.FC<WindSectionProps> = ({ location }) => {
  return (
    <div>
      <div className="w-[33rem] h-[14.5rem] rounded-[14px] flex justify-center pt-[2.6rem] bg-[#C2C2E199]/60  ">
        <div className="w-[26.1rem] flex justify-between items-center h-[9.3rem] ">
          <div className="w-[10.75rem] font-serif flex flex-col gap-[2.1rem] h-[9.3rem] ">
            <div className="text-white font-bold text-xl">Wind</div>
            <div className="text-[#707097] font-normal text-xl">
              Today wind speed
            </div>
            {location.map((location, index) => (
              <div key={index} className="text-white font-bold text-xl">
                {location.wind_speed} km/h
              </div>
            ))}
          </div>
          <div className="items-end mr-[0.8rem]">
            <Image src="/windSpeed.png" alt="" width={120} height={120} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WindSection;
