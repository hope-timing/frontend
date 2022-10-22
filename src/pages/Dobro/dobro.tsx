import React from "react";
import styles from "./dobro.module.scss";

export const Dobro = () => {
  return (
    <div className={styles.container}>
      <div className={styles.dobro}>
        <div className={styles["help-button"]} onClick={() => {}}>
          <div className={styles["help-button__item"]}>Добро</div>
        </div>
        <div className={styles.info}>Как это работает?</div>
      </div>
    </div>
  );
};
