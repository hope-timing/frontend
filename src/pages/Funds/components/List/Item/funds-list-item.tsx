import React from "react";
import { IFundProps } from "./funds-list-item.types";
import styles from "./funds-list-item.module.scss";
import { useHover } from "../../../../../hooks/app/useHover";

export const FundsListItem = ({ fund }: IFundProps) => {
  const [hoverRef, isHovered] = useHover();

  return (
    <div className={styles.fund}>
      <div
        className={styles["fund__bg"]}
        ref={hoverRef ? (hoverRef as React.RefObject<HTMLDivElement>) : null}
      >
        {!isHovered && (
          <>
            <img
              src={fund.logo}
              className={styles["fund__logo"]}
              alt="Логотип благотворительного фонда"
            />
            <div className={styles["fund__title"]}>{fund.name}</div>
          </>
        )}
        {isHovered && (
          <div className={styles["fund__description"]}>{fund.description}</div>
        )}
      </div>
      {/* <div className={styles["fund__icons"]}>
        <Button
          onlyIcon
          icon="icon-info"
          iconStroke="#000"
          iconWidth={30}
          onClick={() => setIsOpenDescription(!isOpenDescription)}
        />
      </div>
      {isOpenDescription && (
        
      )} */}
    </div>
  );
};
