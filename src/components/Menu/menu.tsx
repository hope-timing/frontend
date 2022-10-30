import React from "react";
import { Link, useLocation } from "react-router-dom";
import { menuLinks } from "../../constants/components/Menu/links";
import { IMenu } from "./menu.types";
import cn from "classnames";
import styles from "./menu.module.scss";
import Icon from "../Icon";

export const Menu = ({ withRightSide = false }: IMenu) => {
  const location = useLocation();
  const currentUserBalance = 20;
  const user = true;

  return (
    <div className={styles.container}>
      <div>
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
      {withRightSide && user && (
        <div className={styles.balance}>
          <Icon type="icon-empty-circle" width={20} height={20} stroke="#bfda53" />
          <div className={styles["balance__title"]}>
            {`${currentUserBalance ?? 0} DP`}
          </div>
        </div>
      )}
    </div>
  );
};
