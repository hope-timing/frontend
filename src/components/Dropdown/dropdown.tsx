import React, { useRef, forwardRef } from "react";
import { IDropdownProps } from "./dropdown.types";
import cn from "classnames";
import styles from "./dropdown.module.scss";
import Icon from "../Icon";

export const Dropdown = forwardRef(
  ({ list, isOpen, close }: IDropdownProps, ref: any) => {
    const dropdownRef = useRef<HTMLDivElement>(null);

    if (isOpen) {
      return (
        <div
          className={styles.container}
          style={{ top: (ref?.current?.clientHeight ?? 0) + 15 }}
          ref={dropdownRef}
        >
          {list.map((item, index) => {
            return (
              <div
                onClick={(e) => {
                  if (item.action) {
                    e.stopPropagation();
                    item.action();
                  }
                }}
                className={cn(styles[item.className ?? ""], styles.item)}
                key={index}
              >
                <div className={styles["item__icon"]}>
                  {item.icon && (
                    <Icon type={item.icon} width={30} fill={item.iconFill} />
                  )}
                </div>
                {item.label}
              </div>
            );
          })}
        </div>
      );
    }

    return <></>;
  }
);
