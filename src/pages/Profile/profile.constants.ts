import { TTabsListItem } from "../../components/Tabs/tabs.types";
import { EProfileMenu } from "../../enums/profile-menu";

export const ProfileTabsList: TTabsListItem[] = [
  {
    label: EProfileMenu.MAIN,
    name: "Основная информация",
  },
  {
    label: EProfileMenu.SETTINGS,
    name: "Настройки",
  },
];
