import { TIcon, TIconProps } from "./icon.types";
import { IconBasket } from "./icons/icon-basket";
import { IconInfo } from "./icons/icon-info";

export const IconsList: {
  [key in TIcon]: ({ width, height, fill, stroke }: TIconProps) => JSX.Element;
} = {
  "icon-basket": IconBasket,
  "icon-info": IconInfo,
};
