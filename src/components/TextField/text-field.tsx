import React, { forwardRef } from "react";
import Icon from "../Icon";
import { ITextField } from "./text-field.types";
import cn from "classnames";
import styles from "./text-field.module.scss";

export const TextField = forwardRef(
  (
    {
      type,
      placeholder,
      onChange,
      onBlur,
      value,
      name,
      disabled,
      icon,
      iconWidth,
      fullWidth,
      required,
      invalid,
      autoComplete
    }: ITextField,
    ref: any
  ) => {
    return (
      <>
        <div
          className={cn(
            styles.input,
            fullWidth && styles.fullWidth,
            invalid && styles["input_valid_false"]
          )}
        >
          {icon && (
            <div className={styles["input__icon"]}>
              <Icon type={icon} width={iconWidth ?? 20} />
            </div>
          )}
          <input
            name={name}
            placeholder={placeholder}
            value={value ?? ""}
            type={type}
            onChange={onChange}
            onBlur={onBlur}
            required={required}
            className={styles["input__field"]}
            disabled={disabled}
            autoComplete={autoComplete}
            ref={ref}
          />
        </div>
      </>
    );
  }
);
