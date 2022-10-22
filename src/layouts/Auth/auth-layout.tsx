import React from "react";
import { Outlet } from "react-router-dom";
import styles from "./auth-layout.module.scss";

export const AuthLayout = () => {
  return (
    <div className={styles.auth}>
      <Outlet />
    </div>
  );
};
