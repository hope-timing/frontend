import React from "react";
import { Link, useLocation } from "react-router-dom";
import { menuLinks } from "../../constants/components/Menu/links";
import cn from "classnames";
import styles from "./menu.module.scss";

export const Menu = () => {
  const location = useLocation();

  return (
    <div className={styles.container}>
      {menuLinks.map((item) => {
        return (
          <Link
            to={item.path}
            key={`${item.title}-${item.path}`}
            className={cn(
              styles["menu__item"],
              location.pathname === item.path && styles["menu__item_active"]
            )}
          >
            {item.title}
          </Link>
        );
      })}
    </div>
  );
};
