import Link from "next/link";
import React from "react";

const SettingLink = () => {
  return (
    <div className="flex flex-col gap-5 mt-6">
      <div className=" w-full h-[1px]  bg-gray-300  mt-6"></div>

      <ul className=" flex flex-col gap-4 underline cursor-pointer text-gray-00">
        <li className="hover:text-gray-400">
          <Link href="#around-the-Globe">Around the Globe</Link>
        </li>
        <li className="hover:text-gray-400">
          <Link href="#hurricane">Hurricane Tracer</Link>
        </li>
        <li className="hover:text-gray-400">
          <Link href="#severe-weather">Severe Weather</Link>
        </li>
        <li className="hover:text-gray-400">
          <Link href="#radar-map">Radar & Map</Link>
        </li>
        <li className="hover:text-gray-400">
          <Link href="#news">News</Link>
        </li>
      </ul>
    </div>
  );
};

export default SettingLink;
