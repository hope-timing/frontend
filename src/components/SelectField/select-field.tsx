import React, {
  forwardRef,
  SelectHTMLAttributes,
  useRef,
  useState,
} from "react";
import {
  ISelectProps,
  SelectOnChangeType,
  SelectOptions,
  SelectType,
} from "./select-field.types";
import cn from "classnames";
import styles from "./select-field.module.scss";
import Icon from "../Icon";
import { useOnClickOutside } from "../../hooks/app/useOnClickOutside";

export const SelectFieldGenerate = <T extends SelectOptions>({
  disabled,
  name,
  placeholder,
  defaultValue,
  onChange,
  getLabel,
  optionsList,
  value,
  className
}: ISelectProps<T> & SelectHTMLAttributes<HTMLSelectElement>) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isOpenOptions, setIsOpenOptions] = useState(false);

  const closeOptions = () => {
    setIsOpenOptions(false);
  };

  const handleChange: SelectOnChangeType<T> = (option) => {
    onChange?.(option);
    closeOptions();
  };

  const resetValue = () => {
    onChange?.(undefined);
    closeOptions();
  };

  const inputValue = getLabel(value);

  useOnClickOutside(wrapperRef, closeOptions);

  return (
    <div ref={wrapperRef}>
      <div
        className={cn(styles.input,className)}
        onClick={() => setIsOpenOptions(!isOpenOptions)}
      >
        <input
          name={name}
          title={inputValue}
          value={inputValue}
          placeholder={placeholder}
          defaultValue={defaultValue}
          disabled={disabled}
          readOnly={true}
          contentEditable={false}
          ref={inputRef}
          className={cn(
            styles["input__field"],
            inputValue && styles["input__field_value_fill"],
            className
          )}
        />
        <div
          className={cn(
            styles.arrow,
            isOpenOptions && styles["arrow_transform_rotate"]
          )}
        >
          <Icon type="icon-arrow-down" width={15} fill="#3c3c3c" />
        </div>
      </div>
      {isOpenOptions && (
        <div className={styles.options}>
          <div onClick={resetValue} className={cn(styles["options__item"], styles['options__item_select_unselected'])}>
            Не выбрано
          </div>
          {optionsList.map((item) => {
            return (
              <div
                onClick={() => handleChange(item)}
                key={item.id}
                className={styles["options__item"]}
              >
                {getLabel(item)}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export const SelectField = forwardRef(SelectFieldGenerate) as SelectType;
