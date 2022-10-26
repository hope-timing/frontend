import { ButtonHTMLAttributes } from "react";
import { Color } from "../../types/app/colors";
import { IStyleProps } from "../../types/app/common";

export interface IButton
  extends IStyleProps,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  onClick?: () => void;
  color?: Color;
}
