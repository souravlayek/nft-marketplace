import React from "react";


const ActiveBids = ({ isActive = false }: IconProps) => {
  return (
    <svg
      width="16px"
      height="16px"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: "rotate(90deg)"
      }}
    >
      <path
        d="M17 20V4M17 4L20 7M17 4L14 7"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={isActive ? "#cafc01" : "#d7d6ff9f"}
      />
      <path
        d="M7 4V20M7 20L10 17M7 20L4 17"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={isActive ? "#cafc01" : "#d7d6ff9f"}
      />
    </svg>
  );
};

export default ActiveBids;
