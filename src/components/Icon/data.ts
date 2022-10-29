import { TIcon, TIconProps } from "./icon.types";
import { IconArrowDown } from "./icons/icon-arrow-down";
import { IconBasket } from "./icons/icon-basket";
import { IconCircle } from "./icons/icon-circle";
import { IconEmptyCircle } from "./icons/icon-empty-circle";
import { IconInfo } from "./icons/icon-info";
import { IconPlus } from "./icons/icon-plus";
import { IconSearch } from "./icons/icon-search";

export const IconsList: {
  [key in TIcon]: ({ width, height, fill, stroke }: TIconProps) => JSX.Element;
} = {
  "icon-basket": IconBasket,
  "icon-info": IconInfo,
  "icon-search": IconSearch,
  "icon-arrow-down": IconArrowDown,
  "icon-plus": IconPlus,
  "icon-circle": IconCircle,
  "icon-empty-circle": IconEmptyCircle,
};
