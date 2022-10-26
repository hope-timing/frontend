import React from "react";
import { IIcon } from "../../types/components/icons";

export const IconInfo = ({ width, height, fill, stroke }: IIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 30 30"
    >
      <path
        d="M16,14v9M16,8v2"
        transform="translate(-1 -1)"
        fill={fill ?? "none"}
        stroke={stroke ?? "#000"}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      />
      <circle
        cx="15"
        cy="15"
        r="14"
        fill={fill ?? "none"}
        stroke={stroke ?? "#000"}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
      />
    </svg>
  );
};
