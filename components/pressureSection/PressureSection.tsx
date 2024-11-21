import { Location } from "@/api";
import Image from "next/image";
import React from "react";

interface PressureSectionProps {
  location: Location[];
}

const PressureSection: React.FC<PressureSectionProps> = ({ location }) => {
  return (
    <div>
      <div className="w-[33rem] h-[14.5rem] rounded-[14px] flex justify-center pt-[2.6rem] bg-[#C2C2E199]/60  ">
        <div className="w-[26.1rem] flex justify-between items-center h-[9.3rem] ">
          <div className="w-[10.75rem] font-serif flex flex-col gap-[2.1rem] h-[9.3rem] ">
            <div className="text-white font-bold text-xl">Pressure</div>
            <div className="text-[#707097] font-normal text-xl">
              Today pressure
            </div>
            {location.map((location, index) => (
              <div key={index} className="text-white font-bold text-xl">
                {location.pressure_hpa} hpa
              </div>
            ))}
          </div>
          <div className="items-end mr-[0.8rem]">
            <Image src="/pressureToday.png" alt="" width={120} height={120} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PressureSection;
