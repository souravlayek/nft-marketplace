import React from "react";

type Props = {
  size?: number;
};

const NextArrow = ({ size = 15 }: Props) => {
  return (
    <svg
      width={size}
      height={size}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300 300"
      xmlSpace="preserve"
    >
      <g>
        <g>
          <path
            d="M150,0C67.157,0,0,67.157,0,150c0,82.841,67.157,150,150,150s150-67.159,150-150C300,67.157,232.843,0,150,0z
  M195.708,160.159c-0.731,0.731-1.533,1.349-2.368,1.886l-56.295,56.295c-2.734,2.736-6.318,4.103-9.902,4.103
 s-7.166-1.367-9.902-4.103c-5.47-5.47-5.47-14.34,0-19.808l48.509-48.516l-48.265-48.265c-5.47-5.473-5.47-14.34,0-19.808
 c5.47-5.47,14.338-5.467,19.808-0.003l56.046,56.043c0.835,0.537,1.637,1.154,2.365,1.886c2.796,2.796,4.145,6.479,4.082,10.146
 C199.852,153.68,198.506,157.361,195.708,160.159z"
          />
        </g>
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  );
};

export default NextArrow;
