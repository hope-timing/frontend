import React from "react";
import { ISmokingTitle } from "./smoking-title.types";
import cn from "classnames";
import styles from "./smoking-title.module.scss";

export const SmokingTitle = ({ text, hovered }: ISmokingTitle) => {
  return (
    <div className={cn(styles.letters, hovered && styles.hovered)}>
      {text.split("").map((item) => (
        <span>{item}</span>
      ))}
    </div>
  );
};
