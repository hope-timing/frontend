import React from "react";
import { useAlert } from "react-alert";
import { useForm } from "react-hook-form";
import { TProfile } from "../../../types/responses/profile";

export const useSettingsForm = ({ profile }: Record<"profile", TProfile>) => {
  const alert = useAlert();
  const {
    control,
    formState,
    getFieldState,
    handleSubmit,
  } = useForm({
    defaultValues: {
      email: profile.email ?? "",
      password: "",
    },
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const { error: emailIsError, isDirty: emailIsDirty } = getFieldState(
    "email",
    formState
  );

  const { error: passwordIsError, isDirty: passwordIsDirty } = getFieldState(
    "password",
    formState
  );

  const onSubmitEmail = handleSubmit((data) => {
    console.log(data);
    alert.success("Email успешно обновлен!");
  });

  const onSubmitPassword = handleSubmit((data) => {
    console.log(data);
    alert.success("Пароль успешно обновлен!");
  });

  return {
    control,
    onSubmitEmail,
    onSubmitPassword,
    emailError: !!emailIsError || !emailIsDirty,
    passwordError: !!passwordIsError || !passwordIsDirty,
  };
};
