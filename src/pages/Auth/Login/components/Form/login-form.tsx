import React from "react";
import { Controller } from "react-hook-form";
import { Button } from "../../../../../components/Button/button";
import { Field } from "../../../../../components/Field/field";
import { TextField } from "../../../../../components/TextField/text-field";
import { useLoginForm } from "../../hooks/useLoginForm";
import { ILoginForm } from "./login-form.types";
import styles from "./login-form.module.scss";

export const LoginForm = ({ isNew }: ILoginForm) => {
  const { control, formState, onSubmit } = useLoginForm({ isNew });

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles["info__title"]}>
          {isNew ? "Создать аккаунт" : "Вход"}
        </div>
        <div className={styles["info__description"]}>
          Введите ваши данные в форме ниже и получайте баллы за добро!
        </div>
      </div>
      <form onSubmit={onSubmit} className={styles.form}>
        <Controller
          name="login"
          control={control}
          rules={{ required: true }}
          render={({ field, fieldState: { error } }) => {
            return (
              <Field label="Логин / Email" asterisk>
                <TextField
                  {...field}
                  placeholder="login@mail.ru"
                  invalid={!!error}
                />
              </Field>
            );
          }}
        />
        <Controller
          name="password"
          control={control}
          rules={{ required: true }}
          render={({ field, fieldState: { error } }) => {
            return (
              <Field label="Пароль" asterisk>
                <TextField
                  {...field}
                  type="password"
                  placeholder="Введите пароль"
                  invalid={!!error}
                />
              </Field>
            );
          }}
        />
        <Button
          title={isNew ? "Зарегистрироваться" : "Войти"}
          fullWidth
          disabled={!formState.isValid}
        />
      </form>
    </div>
  );
};
