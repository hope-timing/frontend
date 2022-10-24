import { ERoutesNames } from "../../../enums/routes";
import { TMenu } from "../../../types/constants/menu";

export const menuLinks: TMenu[] = [
  {
    path: "/",
    name: ERoutesNames.DOBRO,
    title: "Добро",
  },
  {
    path: "/funds",
    name: ERoutesNames.FUNDS,
    title: "Фонды",
  },
  {
    path: "/statistic",
    name: ERoutesNames.STATISTIC,
    title: "Статистика",
  },
  {
    path: "/profile",
    name: ERoutesNames.PROFILE,
    title: "Профиль",
  },
];
