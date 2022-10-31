import React, { useCallback } from "react";
import styles from "./alert-template.module.scss";
import cn from "classnames";

export const AlertTemplate = ({ options, message }: any) => {
  const checkStatusBg = useCallback(() => {
    if (options.type == "success") {
      return styles.alertSuccess;
    }
    if (options.type == "info") {
      return styles.alertInfo;
    }
    return styles.alertError;
  }, []);

  return (
    <div className={cn(styles.alert, checkStatusBg())}>
      <div className={styles.label}>{message}</div>
    </div>
  );
};
