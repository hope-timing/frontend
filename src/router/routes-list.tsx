import { ERoutes } from "../enums/routes";
import { Dobro } from "../pages/Dobro/dobro";

export const routes = [
  {
    name: ERoutes.DOBRO,
    path: "/",
    component: <Dobro />,
  },
];
