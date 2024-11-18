import Image from "next/image";
import React from "react";

const EuropeanWeatherMap = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center  bg-[#ECF3F6] py-10 w-[120rem] h-[69rem] ">
        <div className=" w-[77.5rem] h-[57.75rem]  ">
          <div className="text-[#51808E] font-serif font-normal text-[2rem]">
            European Weather Map
          </div>
          <div className=" bg-[#0535445C]/10  w-[77.5rem] h-[51rem] rounded-md mt-[5rem]  ">
            <div className=" w-[70.875rem] h-[43.75rem] mt-[3.5rem] pt-[3rem] ml-[3.5rem] mr-[3.1rem] mb-[6rem]">
              <div className="flex pt-0">
                <Image
                  src="/europeanMap.png"
                  alt="europeanMap"
                  width={1134}
                  height={612}
                />
              </div>

              <div className="  flex  mt-6 pt-[0.85rem] justify-end ">
                <div className="w-[14rem] h-[3.3rem] hover:bg-[#B8D0D8] bg-[#549FB6] text-white text-xl font-normal flex items-center justify-center font-serif text-center rounded-[14px]">
                  <button>View Weather Map</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EuropeanWeatherMap;
