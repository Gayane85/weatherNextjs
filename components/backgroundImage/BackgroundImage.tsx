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
  // const handleBackgroundClick = () => {
  //   if (isOpen) {
  //     setIsOpen(false);
  //   }
  // };
  return (
    <div
      // onClick={handleBackgroundClick}
      className="relative flex mx-0 items-center justify-center w-full h-[661px] rounded-[14px] overflow-hidden"
    >
      <Image
        src="/Rectangle1.png"
        alt="mount"
        layout="fill"
        objectFit="cover"
        className="absolute inset-0 z-0"
      />

      <BurgerIcon
        onClick={burgerClick}
        // onClick={(e) => {
        //   e.stopPropagation();
        //   burgerClick();
        // }}
        className="absolute text-white cursor-pointer top-2 right-4 w-8 h-8  z-30"
      />
      <SettingsList isOpen={isOpen} />

      {/* {isOpen && <SettingsList onClose={() => setIsOpen(false)} />} */}

      <div className="relative z-20">{children}</div>
    </div>
  );
};

export default BackgroundImage;
