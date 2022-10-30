import React from "react";
import Icon from "../Icon";
import { IInDevelope } from "./in-develope.types";
import cn from "classnames";
import styles from "./in-develope.module.scss";

export const InDevelope = ({ absolute = false }: IInDevelope) => {
  return (
    <div
      className={cn(
        styles.container,
        absolute && styles["container_position_absolute"]
      )}
    >
      <div className={styles.title}>{"Раздел в разработке :)"}</div>
      <Icon type="icon-clock" width={200} />
    </div>
  );
};
