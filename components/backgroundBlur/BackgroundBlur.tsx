import React from "react";

const BackgroundBlur = ({ width = "100%", height = "100%", children }) => {
  return (
    <div
      className={` bg-[#BACDD299] border-[#BACDD2] flex justify-center items-center border rounded-[28px]`}
      style={{
        width: width,
        height: height,
      }}
    >
      {children}
    </div>
  );
};

export default BackgroundBlur;
