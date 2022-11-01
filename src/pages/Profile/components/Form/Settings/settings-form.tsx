import React, { useContext, useMemo } from "react";
import { Controller } from "react-hook-form";
import { Field } from "../../../../../components/Field/field";
import { TextField } from "../../../../../components/TextField/text-field";
import { useSettingsForm } from "../../../hooks/useSettingsForm";
import { ProfileContext } from "../../../profile";
import InputMask from "react-input-mask";
import styles from "./settings-form.module.scss";
import { Button } from "../../../../../components/Button/button";

export const SettingsForm = () => {
  const profile = useContext(ProfileContext);
  const {
    control,
    onSubmitEmail,
    onSubmitPassword,
    emailError,
    passwordError,
  } = useSettingsForm({ profile });

  return (
    <div className={styles.container}>
      <div className={styles["rows"]}>
        <div className={styles["rows__item"]}>
          <Controller
            control={control}
            name="email"
            rules={{ required: true }}
            render={({ field, fieldState: { error } }) => {
              return (
                <Field label="Новый email">
                  <TextField
                    {...field}
                    invalid={!!error}
                    className={styles.input}
                    type="email"
                  />
                </Field>
              );
            }}
          />
          <div className={styles.button}>
            <Button
              title="Подтвердить"
              disabled={emailError}
              onClick={() => onSubmitEmail()}
              fullWidth
            />
          </div>
        </div>
        <hr className={styles.separator} />
        <div className={styles["rows__item"]}>
          <Controller
            control={control}
            name="password"
            rules={{ minLength: 6 }}
            render={({ field, fieldState: { error } }) => {
              return (
                <Field label="Новый пароль">
                  <TextField
                    {...field}
                    invalid={!!error}
                    className={styles.input}
                    placeholder="******"
                    type="password"
                  />
                </Field>
              );
            }}
          />
          <div className={styles.button}>
            <Button
              title="Сохранить"
              disabled={passwordError}
              onClick={() => onSubmitPassword()}
              fullWidth
            />
          </div>
        </div>
      </div>
    </div>
  );
};
