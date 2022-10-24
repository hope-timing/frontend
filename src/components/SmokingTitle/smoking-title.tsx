import React from "react";
import styles from "./smoking-title.module.scss";

export const SmokingTitle = ({ text }: Record<"text", string>) => {
  return (
    <div className={styles.letters}>
      {text.split("").map((item) => (
        <span>{item}</span>
      ))}
    </div>
  );
};
