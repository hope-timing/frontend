import React, { ForwardedRef, forwardRef } from "react";
import { IAvatarProps } from "./avatar.types";
import DefaultAvatar from "../../assets/svg/default-avatar.svg";
import styles from "./avatar.module.scss";
import { WithRef } from "../../types/app/common";

export const Avatar = forwardRef(
  ({ src, isOverlay }: IAvatarProps, ref: ForwardedRef<HTMLDivElement>) => {
    return (
      <div className={styles.container} ref={ref}>
        <div className={styles["container__avatar"]}>
          <img
            src={src || DefaultAvatar}
            alt="Аватар пользователя"
            className={styles.img}
          />
          {isOverlay && (
            <div className={styles["container__avatar_overlay_true"]} />
          )}
        </div>
      </div>
    );
  }
);
