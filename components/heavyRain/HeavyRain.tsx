import Image from "next/image";
import React from "react";

const HeavyRain = () => {
  return (
    <div className=" w-[1342px] h-[692px] rounded-[14px] mx-auto bg-white mt-200">
      <div className=" object-cover py-[42px] px-[40px] ">
        <Image src="/Frame 89.png" alt="rain" width={1224} height={612} />
      </div>
    </div>
  );
};

export default HeavyRain;
