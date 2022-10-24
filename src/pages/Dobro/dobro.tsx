import React from "react";
import cn from "classnames";
import styles from "./dobro.module.scss";
import { SmokingTitle } from "../../components/SmokingTitle/smoking-title";
import { BirdsFly } from "./components/BirdsFly/birds-fly";

export const Dobro = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <SmokingTitle text="время" />
        <SmokingTitle text="=" />
        <SmokingTitle text="жизнь" />
      </div>
      <div className={styles.dobro}>
        <div className={styles.offer}>
          Обменяй свое <span className={styles["offer_accent"]}>время</span> на{" "}
          <span className={styles["offer_accent"]}>помощь</span> людям!
        </div>
        <div className={styles["help-button"]} onClick={() => {}}>
          <div className={styles["help-button__item"]}>Добро</div>
        </div>
        <div className={styles.info}>Как это работает?</div>
      </div>
      <div className={styles.points}>
        <p>Индекс добра: <span className={styles['points__items']}>20</span></p>
      </div>
      <BirdsFly />
    </div>
  );
};
