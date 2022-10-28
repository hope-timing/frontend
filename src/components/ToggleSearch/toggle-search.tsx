import React, { useState } from "react";
import { Button } from "../Button/button";
import { Search } from "../Search/search";
import { ISearchProps } from "../Search/search.types";
import styles from "./toggle-search.module.scss";

export const ToggleSearch = (props: ISearchProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.search}>{isOpen && <Search {...props} />}</div>
      <Button onlyIcon icon="icon-search" onClick={() => setIsOpen(!isOpen)} />
    </div>
  );
};
