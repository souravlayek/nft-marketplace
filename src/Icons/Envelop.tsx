import React from "react";


const Envelop = ({ isActive = false }: IconProps) => {
  return (
    <svg
      width="16px"
      height="16px"
      viewBox="0 0 32.311 32.311"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g transform="translate(-224.531 -194.157)">
        <path d="M252.782,196.157a2.062,2.062,0,0,1,2.06,2.06v24.191a2.062,2.062,0,0,1-2.06,2.06H228.591a2.063,2.063,0,0,1-2.06-2.06V198.217a2.063,2.063,0,0,1,2.06-2.06h24.191m0-2H228.591a4.06,4.06,0,0,0-4.06,4.06v24.191a4.06,4.06,0,0,0,4.06,4.06h24.191a4.06,4.06,0,0,0,4.06-4.06V198.217a4.06,4.06,0,0,0-4.06-4.06Z" fill={isActive ? "#cafc01" : "#d7d6ff9f"} />
        <path d="M240.687,215.205a4.478,4.478,0,0,1-2.729-.922l-13.011-9.943,1.215-1.59,13.01,9.944a2.5,2.5,0,0,0,3.03,0l12.853-9.826,1.215,1.59-12.853,9.825A4.492,4.492,0,0,1,240.687,215.205Z" fill={isActive ? "#cafc01" : "#d7d6ff9f"} />
      </g>
    </svg>
  );
};

export default Envelop;
