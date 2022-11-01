import { EProfileMenu } from "../../enums/profile-menu";

type TTabsType = "vertical" | "horizontal";
export type TTabsListItem = {
  label: EProfileMenu;
  name: string;
  action?: (props?: any) => void;
};

export interface ITabs {
  type?: TTabsType;
  list: TTabsListItem[];
  activeTab: EProfileMenu;
  setActiveTab: React.Dispatch<React.SetStateAction<EProfileMenu>>;
}
