import { InputHTMLAttributes } from "react";
import { TIcon } from "../Icon/icon.types";

export interface ITextField extends InputHTMLAttributes<HTMLInputElement> {
  icon?: TIcon;
  iconWidth?: number;
  fullWidth?: boolean;
}
