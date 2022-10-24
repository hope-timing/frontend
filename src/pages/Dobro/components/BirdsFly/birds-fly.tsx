import React from "react";
import cn from "classnames";
import styles from "./birds-fly.module.scss";

export const BirdsFly = () => {
  return (
    <>
      <div
        className={cn(styles["bird-container"], styles["bird-container-one"])}
      >
        <div className={cn(styles["bird"], styles["bird-one"])}></div>
      </div>
      <div
        className={cn(styles["bird-container"], styles["bird-container-two"])}
      >
        <div className={cn(styles["bird"], styles["bird-two"])}></div>
      </div>
      <div
        className={cn(styles["bird-container"], styles["bird-container-three"])}
      >
        <div className={cn(styles["bird"], styles["bird-three"])}></div>
      </div>
      <div
        className={cn(styles["bird-container"], styles["bird-container-four"])}
      >
        <div className={cn(styles["bird"], styles["bird-four"])}></div>
      </div>
    </>
  );
};
