import { IStyleProps } from "../../types/app/common";
import { TIcon } from "../Icon/icon.types";

type TDropdownPositions = "right" | "left";

export interface IDropdownList extends IStyleProps {
  label: string;
  action?: () => void;
  icon?: TIcon;
  position?: TDropdownPositions;
  iconFill?: string;
}

export interface IDropdownProps {
  isOpen: boolean;
  close: React.Dispatch<React.SetStateAction<boolean>>;
  list: IDropdownList[];
}
