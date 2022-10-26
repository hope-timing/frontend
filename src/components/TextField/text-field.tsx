import React, { forwardRef } from "react";
import Icon from "../Icon";
import { ITextField } from "./text-field.types";
import cn from "classnames";
import styles from "./text-field.module.scss";

export const TextField = forwardRef(({
  type,
  placeholder,
  onChange,
  onBlur,
  value,
  name,
  icon,
  iconWidth,
  fullWidth,
}: ITextField, ref: any) => {
  return (
    <>
      <div className={cn(styles.input, fullWidth && styles.fullWidth)}>
        {icon && (
          <div className={styles["input__icon"]}>
            <Icon type={icon} width={iconWidth ?? 20} />
          </div>
        )}
        <input
          name={name}
          placeholder={placeholder}
          value={value ?? ''}
          type={type}
          onChange={onChange}
          onBlur={onBlur}
          className={styles["input__field"]}
          ref={ref}
        />
      </div>
    </>
  );
});
