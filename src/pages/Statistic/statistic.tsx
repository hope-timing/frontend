import React from "react";
import { InDevelope } from "../../components/DevelopingMode/in-develope";
import styles from "./statistic.module.scss";

export const Statistic = () => {
  return (
    <div className={styles.statistic}>
      <InDevelope absolute />
    </div>
  );
};
