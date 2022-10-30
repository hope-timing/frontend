import React, { useState } from "react";
import Icon from "../../../components/Icon";
import LoginBg from "../../../assets/svg/login-bg.svg";
import styles from "./login.module.scss";
import { ReactSVG } from "react-svg";
import { LoginForm } from "./components/Form/login-form";
import { Button } from "../../../components/Button/button";

export const Login = () => {
  const [isNew, setIsNew] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <div className={styles["left-side"]}>
          <div className={styles["left-side__img"]}>
            <ReactSVG src={LoginBg} />
          </div>
          <div className={styles["left-side__title"]}>
            «Добро» - Обменяй время на помощь людям!
          </div>
        </div>
        <div className={styles["right-side"]}>
          <LoginForm isNew={isNew} />
          <div className={styles.reg}>
            <span className={styles["reg__label"]}>
              {isNew ? "Уже есть аккаунт?" : "Еще нет аккаунта?"}
            </span>
            <Button
              title={isNew ? "Войти" : "Создать"}
              className={styles["reg__button"]}
              onClick={() => setIsNew(!isNew)}
            />
          </div>
        </div>
      </div>
      <div className={styles.circle}>
        <Icon type="icon-circle" width={400} fill="#bfda5373" />
      </div>
      <div className={styles["empty-circle"]}>
        <Icon type="icon-empty-circle" width={400} stroke="#bfda5373" />
      </div>
    </div>
  );
};
