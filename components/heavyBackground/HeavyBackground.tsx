import Image from "next/image";
import React from "react";

const HeavyBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-[1342px] h-[692px] rounded-[14px] mx-auto bg-white mt-10">
      <div className=" object-cover py-[42px] px-[40px] z-10 ">
        <Image
          className="absolute inset-0 h-full w-full rounded-[14px]"
          src="/rain.png"
          alt="rain"
          // width={1230}
          // height={612}
          layout="fill"
          priority
        />
      </div>
      <div>
        <div className="relative z-10 ">{children}</div>
      </div>
    </div>
  );
};

export default HeavyBackground;
