import React, { useState } from "react";
import { IFundProps } from "./funds-list-item.types";
import styles from "./funds-list-item.module.scss";
import { Button } from "../../../../../components/Button/button";

export const FundsListItem = ({ fund }: IFundProps) => {
  const [isOpenDescription, setIsOpenDescription] = useState(false);
  return (
    <div className={styles.fund}>
      <img
        src={fund.logo}
        className={styles["fund__logo"]}
        alt="Логотип благотворительного фонда"
      />
      <div className={styles["fund__title"]}>{fund.name}</div>
      <div className={styles["fund__icons"]}>
        <Button
          onlyIcon
          icon="icon-info"
          iconStroke="#000"
          iconWidth={30}
          onClick={() => setIsOpenDescription(!isOpenDescription)}
        />
      </div>
      {isOpenDescription && (
        <div className={styles["fund__description"]}>{fund.description}</div>
      )}
    </div>
  );
};
