import React from "react";

const BurgerIcon = ({ className, onClick }) => {
  return (
    <svg
      onClick={onClick}
      className={className}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.66663 25.3333H29.3333M2.66663 6.66666H29.3333M2.66663 16H29.3333"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
};

export default BurgerIcon;
