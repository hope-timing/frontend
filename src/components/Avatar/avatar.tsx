import React from "react";
import { IAvatarProps } from "./avatar.types";
import DefaultAvatar from "../../assets/svg/default-avatar.svg";
import styles from "./avatar.module.scss";

export const Avatar = ({ src }: IAvatarProps) => {
  return (
    <div className={styles.container}>
      <div className={styles["container__avatar"]}>
        <img
          src={src || DefaultAvatar}
          alt="Аватар пользователя"
          className={styles.img}
        />
      </div>
    </div>
  );
};
