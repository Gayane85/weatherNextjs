import React from "react";

interface BurgerIconProps {
  width?: number;
  height?: number;
  color?: string;
}

const BurgerIcon: React.FC<BurgerIconProps> = ({
  width = 32,
  height = 32,
  color = "#FFFFFF",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.66663 25.3333H29.3333M2.66663 6.66666H29.3333M2.66663 16H29.3333"
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  );
};

export default BurgerIcon;
