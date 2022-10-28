import React from "react";
import { IButton } from "./button.types";
import { WithChildren } from "../../types/app/common";
import cn from "classnames";
import styles from "./button.module.scss";
import Icon from "../Icon";

export const Button = ({
  title,
  color,
  onClick,
  children,
  icon,
  type,
  onlyIcon,
  iconFill,
  iconWidth,
  iconHeight,
  iconStroke,
  className,
}: IButton & Partial<WithChildren>) => {
  const handleClick = (e: any) => {
    e.preventDefault();
    onClick?.();
  };
  return (
    <button
      title={title ?? ""}
      onClick={(e) => (onClick ? handleClick(e) : {})}
      className={cn(
        styles.button,
        onlyIcon && styles["button_onlyicon_true"],
        className
      )}
    >
      {icon && (
        <div
          className={
            onlyIcon
              ? styles["button__icon_onlyicon_true"]
              : styles["button__icon"]
          }
        >
          <Icon
            type={icon}
            width={iconWidth ?? 16}
            height={iconHeight}
            stroke={iconStroke ?? "#ffffff"}
            fill={onlyIcon ? iconFill : ""}
          />
        </div>
      )}
      {!onlyIcon && <div className={styles["button__title"]}>{children}</div>}
    </button>
  );
};
