export type TIcon = "icon-basket" | "icon-info" | "icon-search";
export type TIconProps = {
  width?: number;
  height?: number;
  fill?: string;
  stroke?: string;
};
export interface IIconComponentProps extends TIconProps {
  type: TIcon;
};
