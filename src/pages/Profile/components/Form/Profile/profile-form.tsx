import React, { useContext } from "react";
import { Controller } from "react-hook-form";
import { Button } from "../../../../../components/Button/button";
import { Field } from "../../../../../components/Field/field";
import { TextField } from "../../../../../components/TextField/text-field";
import { useProfileForm } from "../../../hooks/useProfileForm";
import { ProfileContext } from "../../../profile";
import InputMask from "react-input-mask";
import { SelectField } from "../../../../../components/SelectField/select-field";
import { ESex } from "../../../../../enums/sex";
import { TSexSelect } from "./profile-form.types";
import styles from "./profile-form.module.scss";

export const ProfileForm = () => {
  const profile = useContext(ProfileContext);
  const { control, onSubmit, formState } = useProfileForm({ profile });

  const Sex: TSexSelect[] = Object.values(ESex).map((item, index) => ({
    id: index.toString(),
    name: item,
  }));

  const getSexLabel = (value: string) => {
    if (value === ESex.MALE) {
      return "Мужской";
    }

    if (value === ESex.FEMALE) {
      return "Женский";
    }

    return "";
  };

  return (
    <form onSubmit={onSubmit} className={styles.container}>
      <div className={styles["rows"]}>
        <Controller
          control={control}
          name="firstName"
          render={({ field, fieldState: { error } }) => {
            return (
              <Field label="Имя">
                <TextField {...field} invalid={!!error} />
              </Field>
            );
          }}
        />
        <Controller
          control={control}
          name="lastName"
          render={({ field, fieldState: { error } }) => {
            return (
              <Field label="Фамилия">
                <TextField {...field} invalid={!!error} />
              </Field>
            );
          }}
        />
        <Controller
          control={control}
          name="middleName"
          render={({ field, fieldState: { error } }) => {
            return (
              <Field label="Отчество">
                <TextField {...field} invalid={!!error} />
              </Field>
            );
          }}
        />
        <Controller
          control={control}
          name="phone"
          render={(props) => {
            return (
              <Field label="Телефон">
                <InputMask
                  mask="+7 (999) 999-99-99"
                  value={props.field.value}
                  disabled={false}
                  onChange={(value): void => {
                    props.field.onChange(value);
                  }}
                >
                  <TextField disabled={false} type="text" />
                </InputMask>
              </Field>
            );
          }}
        />
        <Controller
          control={control}
          name="city"
          render={({ field, fieldState: { error } }) => {
            return (
              <Field label="Город">
                <TextField {...field} invalid={!!error} />
              </Field>
            );
          }}
        />
        <Controller
          control={control}
          name="age"
          render={(props) => {
            return (
              <Field label="Дата рождения">
                <InputMask
                  mask="99.99.9999"
                  value={props.field.value}
                  disabled={false}
                  onChange={(value): void => {
                    props.field.onChange(value);
                  }}
                >
                  <TextField
                    disabled={false}
                    type="text"
                    invalid={!!props.fieldState.error}
                  />
                </InputMask>
              </Field>
            );
          }}
        />
        <Controller
          control={control}
          name="sex"
          render={({ field: { onChange, value } }) => (
            <Field label="Пол">
              <SelectField
                value={Sex?.find((item) => item.name === value)}
                optionsList={Sex}
                getLabel={(option) => getSexLabel(option?.name || "")}
                onChange={(value) => {
                  onChange({ target: { value: value?.name ?? "" } });
                }}
              />
            </Field>
          )}
        />
      </div>
      <div className={styles.button}>
        <Button
          title="Сохранить"
          type="submit"
          disabled={!formState.isValid}
          fullWidth
        />
      </div>
    </form>
  );
};
