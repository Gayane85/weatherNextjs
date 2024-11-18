import React from "react";
import Fluent_Mdl2_Settings from "../icons/fluent-mdl2_settings/Fluent_Mdl2_Settings";
import SettingLink from "../settingsLink/SettingLink";

const SettingsList = ({ isOpen }: any) => {
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

        <ul className="flex flex-col text-lg font-serif text-gray-600 mb-10">
          <li>Yerevan, Yerevan Weather</li>
          <li>Today</li>
          <li>Hourly</li>
          <li>Daily</li>
          <li>Radar</li>
          <li>MinuteCast</li>
          <li>Monthly</li>
          <li>Air Quality</li>
        </ul>
      </div>

      <SettingLink />
    </div>
  );
};

export default SettingsList;
