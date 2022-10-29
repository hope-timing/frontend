import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Menu } from "../../components/Menu/menu";
import cn from "classnames";
import styles from "./base-layout.module.scss";

export const BaseLayout = () => {
  const location = useLocation();

  return (
    <div
      className={cn(
        styles.base,
        location.pathname === "/" && styles["base__container_overflow_hidden"]
      )}
    >
      <Menu />
      <div className={cn(styles["base__container"])}>
        <Outlet />
      </div>
    </div>
  );
};
