import React from "react";
import { TIconProps } from "../icon.types";

export const IconEmptyCircle = ({ width, height, fill, stroke }: TIconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 120 120"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M47,94A47,47,0,1,1,94,47,47,47,0,0,1,47,94Zm0-81.81A34.81,34.81,0,1,0,81.81,47,34.84,34.84,0,0,0,47,12.19Z"
        fill={fill ?? "#000"}
      />
    </svg>
  );
};
