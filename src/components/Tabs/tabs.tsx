import React from "react";
import { ITabs } from "./tabs.types";
import cn from "classnames";
import styles from "./tabs.module.scss";

export const Tabs = ({ type = "vertical", list, activeTab, setActiveTab }: ITabs) => {

  return (
    <ul className={cn(type === "vertical" && styles["tabs-vertical"])}>
      {list.map((tab, index) => {
        return (
          <li
            className={cn(
              styles["tabs-vertical__item"],
              activeTab === tab.label && styles["tabs-vertical__item_active_true"]
            )}
            onClick={() => {
              setActiveTab(tab.label);
              if (tab.action) {
                tab.action();
              }
            }}
            key={index}
          >
            {tab.name}
          </li>
        );
      })}
    </ul>
  );
};
