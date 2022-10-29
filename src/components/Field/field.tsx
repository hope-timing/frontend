import React from "react";
import { WithChildren } from "../../types/app/common";
import { IField } from "./field.types";
import styles from "./field.module.scss";

export const Field = ({ label, asterisk, children }: IField & WithChildren) => {
  return (
    <div className={styles.container}>
      <label className={styles.label}>
        {label}
        {asterisk && <span className={styles.asterisk}> *</span>}
      </label>
      {children}
    </div>
  );
};
