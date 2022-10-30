import React from "react";
import { TIconProps } from "../icon.types";

export const IconEmptyCircle = ({
  width,
  height,
  fill,
  stroke,
}: TIconProps) => {
  return (
    <svg
      width={width}
      height={width}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 416 416"
    >
      <circle
        cx="208"
        cy="208"
        r="192"
        fill={fill ?? "none"}
        stroke={stroke ?? "#000"}
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="32"
      />
    </svg>
  );
};
