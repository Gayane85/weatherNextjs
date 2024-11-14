import React from "react";
import SettingsList from "../settingsList/SettingsList";
import SettingLink from "../settingsLink/SettingLink";

const SideBarSettings = ({ className, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`w-[280px] h-[814px] top-[28px] left-[1499px] rounded-[8px] py-[38] px-[28px]${className} `}
    >
      <SettingsList />
      <SettingLink />
    </div>
  );
};

export default SideBarSettings;
