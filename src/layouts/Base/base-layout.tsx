import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./base-layout.module.scss";

export const BaseLayout = () => {
  return (
    <div className={styles.base}>
      <Outlet />
    </div>
  );
};
