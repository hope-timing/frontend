import React from "react";
import { IFundsListProps } from "./funds-list.types";
import { FundsListItem } from "./Item/funds-list-item";
import styles from "./funds-list.module.scss";

export const FundsList = ({ funds }: IFundsListProps) => {
  return (
    <div className={styles.container}>
      {funds.map((fund) => (
        <FundsListItem fund={fund} />
      ))}
    </div>
  );
};
