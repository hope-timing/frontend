import React from "react";
import { IconBasket } from "../../components/Icon/icons/icon-basket";
import { IconInfo } from "../../components/Icon/icons/icon-info";
import { SmokingTitle } from "../../components/SmokingTitle/smoking-title";
import { BirdsFly } from "./components/BirdsFly/birds-fly";
import styles from "./dobro.module.scss";

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
      <div className={styles.separator}>
        <SmokingTitle text="добро" />
        <SmokingTitle text="⇄" hovered />
        <SmokingTitle text="добро" />
      </div>
      <div className={styles.points}>
        <div className={styles["points__balance"]}>
          <p>
            Индекс добра: <span className={styles["points__items"]}>20 DP</span>
          </p>
          <div className={styles["points__info"]}>
            <IconInfo width={18} />
          </div>
        </div>
        <div className={styles["change-button"]}>
          <IconBasket width={30} stroke="#fff" />
          <span className={styles["change-button__text"]}>Добро для тебя</span>
        </div>
      </div>
      <BirdsFly />
    </div>
  );
};
