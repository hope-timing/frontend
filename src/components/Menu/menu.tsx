import React, { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { menuLinks } from "../../constants/components/Menu/links";
import { IMenu } from "./menu.types";
import cn from "classnames";
import styles from "./menu.module.scss";
import Icon from "../Icon";
import { IDropdownList } from "../Dropdown/dropdown.types";
import { Dropdown } from "../Dropdown/dropdown";
import { useOnClickOutside } from "../../hooks/app/useOnClickOutside";

export const Menu = ({ withRightSide = false }: IMenu) => {
  const [isOpenBalanceMenu, setIsOpenBalanceOpenMenu] =
    useState<boolean>(false);
  const balanceRef = useRef<HTMLDivElement>(null);
  const balanceWrapperRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const currentUserBalance = 20;
  const user = true;

  const balanceMenu: IDropdownList[] = [
    {
      label: "Обменять баллы",
      icon: "icon-cart-add",
      iconFill: "#3c3c3c"
    },
    {
      label: "Пригласить друга",
      icon: "icon-person-add",
      iconFill: "#3c3c3c"
    },
  ];

  useOnClickOutside(balanceWrapperRef, () => setIsOpenBalanceOpenMenu(false));

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
        <div className={styles["balance-wrapper"]} ref={balanceWrapperRef}>
          <div
            className={styles.balance}
            onClick={() => setIsOpenBalanceOpenMenu(!isOpenBalanceMenu)}
            ref={balanceRef}
          >
            <Icon
              type="icon-empty-circle"
              width={20}
              height={20}
              stroke="#bfda53"
            />
            <div className={styles["balance__title"]}>
              {`${currentUserBalance ?? 0} DP`}
            </div>
          </div>
          <Dropdown
            list={balanceMenu}
            isOpen={isOpenBalanceMenu}
            close={setIsOpenBalanceOpenMenu}
            ref={balanceRef}
          />
        </div>
      )}
    </div>
  );
};
