import React from "react";
import { Outlet } from "react-router-dom";
import { Menu } from "../../components/Menu/menu";
import styles from "./base-layout.module.scss";

export const BaseLayout = () => {
  return (
    <div className={styles.base}>
      <Menu />
      <Outlet />
    </div>
  );
};
