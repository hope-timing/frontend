import React from "react";
import { IButton } from "./button.types";
import { WithChildren } from "../../types/app/common";
import cn from "classnames";
import styles from "./button.module.scss";

export const Button = ({
  title,
  color,
  onClick,
  children,
  type,
  className,
}: IButton & WithChildren) => {
  const handleClick = (e: any) => {
    e.preventDefault();
    onClick?.();
  };
  return (
    <button
      title={title}
      onClick={(e) => onClick ? handleClick(e) : {}}
      className={cn(styles.button, className)}
    >
      {children}
    </button>
  );
};
