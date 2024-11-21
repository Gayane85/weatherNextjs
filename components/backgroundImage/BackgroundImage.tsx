"use client";
import Image from "next/image";
import React, { useState } from "react";
import BurgerIcon from "../icons/burgerIcon/BurgerIcon";
import SettingsList from "../settingsList/SettingsList";

const BackgroundImage = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const burgerClick = (): void => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative flex mx-0 items-center justify-center w-full max-w-[1440px] h-[400px] sm:h-[500px] md:h-[600px] lg:h-[661px] rounded-[14px] overflow-hidden">
      <Image
        src="/redMountains.png"
        alt="mount"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />
      <div
        onClick={burgerClick}
        className="absolute text-gray-100 cursor-pointer top-2 right-4 w-8 h-8  z-30"
      >
        <BurgerIcon />
      </div>
      <div className="absolute top-1 right-0">
        <SettingsList isOpen={isOpen} />
      </div>

      <div className="relative  z-20">{children}</div>
    </div>
  );
};

export default BackgroundImage;
