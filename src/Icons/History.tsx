import React from "react";

type Props = {};

const History = ({ isActive = false }: IconProps) => {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.507 12.324a7 7 0 0 0 .065-8.56A7 7 0 0 0 2 4.393V2H1v3.5l.5.5H5V5H2.811a6.008 6.008 0 1 1-.135 5.77l-.887.462a7 7 0 0 0 11.718 1.092zm-3.361-.97l.708-.707L8 7.792V4H7v4l.146.354 3 3z"
        fill={isActive ? "#cafc01" : "#d7d6ff9f"}
      />
    </svg>
  );
};

export default History;
