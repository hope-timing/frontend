import React from "react";
import { ISearchProps } from "./search.types";
import { Loading } from "../Loading/loading";
import styles from "./search.module.scss";
import Icon from "../Icon";

export const Search = (props: ISearchProps) => {
  const {
    className,
    style,
    icon,
    value,
    onChange,
    onKeyDown,
    isLoading,
    ...restProps
  } = props;

  return (
    <>
      <div className={styles.search}>
        <div className={styles["search__icon"]}>
          <Icon type="icon-search" />
        </div>
        <input
          type="text"
          placeholder="Поиск"
          className={styles["search__input"]}
          onChange={onChange}
          onKeyDown={onKeyDown}
          {...restProps}
          value={value}
        />
      </div>
      {isLoading && <Loading spinner />}
    </>
  );
};
