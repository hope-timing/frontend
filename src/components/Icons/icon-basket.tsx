import React from "react";
import { IIcon } from "../../types/components/icons";

export const IconBasket = ({ width, height, fill, stroke }: IIcon) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 19.5 17.5"
    >
      <path
        d="M3,10H21L19,20H5M3,10,9,4M3,10l1.2,6M15,4l3,3"
        transform="translate(-2.25 -3.25)"
        fill={fill ?? "none"}
        stroke={stroke ?? "#001a72"}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
      />
    </svg>
  );
};
