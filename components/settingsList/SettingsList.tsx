import React from "react";
import Fluent_Mdl2_Settings from "../icons/fluent-mdl2_settings/Fluent_Mdl2_Settings";
import SettingLink from "../settingsLink/SettingLink";
import Link from "next/link";

interface SettingListProps {
  isOpen: boolean;
}

const SettingsList: React.FC<SettingListProps> = ({ isOpen }) => {
  return (
    <div
      className={` flex flex-col bg-white top-5 right-4 w-[288px] h-[814px] border-gray-400 rounded-[8px] py-8 px-7 shadow-lg transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div>
        <div className="flex items-center gap-4  mb-6">
          <Fluent_Mdl2_Settings />
          <h3 className="font-400">Settings</h3>
        </div>

        <div className="flex flex-col text-lg font-serif text-gray-600 mb-10">
          <Link href="/">Yerevan, Yerevan Weather</Link>
          <Link href="/today">Today</Link>
          <Link href="">Hourly</Link>
          <Link href="">Daily</Link>
          <Link href="">Radar</Link>
          <Link href="">MinuteCast</Link>
          <Link href="">Monthly</Link>
          <Link href="">Air Quality</Link>
        </div>
      </div>

      <SettingLink />
    </div>
  );
};

export default SettingsList;
