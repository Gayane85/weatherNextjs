import Image from "next/image";
import React from "react";

const WeatherRadar = ({ dailyData }) => {
  const temperatureRanges = [
    { temp: 40, color: "#E69532" },
    { temp: 20, color: "#D29F1F" },
    { temp: 0, color: "#3A73C8" },
    { temp: -10, color: "#343E80" },
    { temp: -20, color: "#424099" },
  ];
  return (
    <div className="w-[493px] h-[436px] rounded-[14px] bg-white mt-10 py-[14px] px-[26px] gap-[10px]">
      <div className="w-[432px] h-[44px] ">
        <h4 className="font-400 text-[#51808E] text-[32px] text-center">
          World Weather Radar
        </h4>
        <h6 className="font-300 text-[#51808E] text-[21px] text-center">
          (for week)
        </h6>
        <div className="flex py-6 gap-4">
          <div>
            <Image src="/Group 13.png" alt="armMap" width={173} height={145} />
          </div>
          <div>
            <Image src="/Frame 169.png" alt="armMap" width={97} height={69} />
          </div>
          <div className="flex flex-col gap-2 ">
            {temperatureRanges.map((range, index) => (
              <div key={index} className="flex items-center">
                <div
                  className="border h-6 border-b w-16"
                  style={{
                    backgroundColor: range.color,
                    borderColor: range.color,
                  }}
                >
                  {range.temp}°C
                </div>
                <span>
                  {dailyData.find((day) => day.sun <= range.temp)?.sun ?? "--"}
                  °C
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex cols-3 mt-3">
          <div>
            <Image src="/Frame 165.png" alt="sea" width={173} height={145} />
          </div>
          <div>
            <Image src="/Group 14.png" alt="sea" width={173} height={145} />
          </div>

          <div>
            <Image src="/Group 16.png" alt="sea" width={173} height={145} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherRadar;
