import React from "react";
import { IFundProps } from "./funds-list-item.types";
import styles from "./funds-list-item.module.scss";
import { Button } from "../../../../../components/Button/button";

export const FundsListItem = ({ fund }: IFundProps) => {
  return (
    <div className={styles.fund}>
      <div className={styles["fund__bg"]}>
        <img
          src={fund.logo}
          className={styles["fund__logo"]}
          alt="Логотип благотворительного фонда"
        />
        <div className={styles["fund__title"]}>{fund.description}</div>
        <div className={styles["fund__button"]}>
          <a href={fund.links.url} target="_blank">
            Подробнее{" "}
          </a>
        </div>
        <div className={styles["fund__category"]}>{fund.category}</div>
      </div>
      {/* <div className={styles["fund__icons"]}>
        <Button
          onlyIcon
          icon="icon-info"
          iconStroke="#000"
          iconWidth={30}
          onClick={() => setIsOpenDescription(!isOpenDescription)}
        />
      </div>
      {isOpenDescription && (
        
      )} */}
    </div>
  );
};
