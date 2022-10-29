export type TIcon =
  | "icon-basket"
  | "icon-info"
  | "icon-search"
  | "icon-arrow-down"
  | "icon-plus"
  | "icon-circle"
  | "icon-empty-circle";

export type TIconProps = {
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
};

export interface IIconComponentProps extends TIconProps {
  type: TIcon;
}
