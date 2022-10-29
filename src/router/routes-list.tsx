import React from "react";
import { useRoutes } from "react-router-dom";
import { AuthLayout } from "../layouts/Auth/auth-layout";
import { BaseLayout } from "../layouts/Base/base-layout";
import { Login } from "../pages/Auth/Login/login";
import { Dobro } from "../pages/Dobro/dobro";
import { Funds } from "../pages/Funds/funds";
import { Profile } from "../pages/Profile/profile";
import { Statistic } from "../pages/Statistic/statistic";

export const AppRoutes: () => React.ReactElement<
  any,
  string | React.JSXElementConstructor<any>
> | null = () => {
  const routes = useRoutes([
    {
      path: "/auth",
      element: <AuthLayout />,
      children: [
        {
          path: "",
          element: <Login />,
        },
      ],
    },
    {
      path: "",
      element: <BaseLayout />,
      children: [
        {
          path: "/",
          element: <Dobro />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/statistic",
          element: <Statistic />,
        },
        {
          path: "/funds",
          element: <Funds />,
        },
      ],
    },
  ]);

  return routes;
};
