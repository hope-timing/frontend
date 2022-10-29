import React from "react";
import { useForm } from "react-hook-form";
import { IUseLoginFormProps } from "../login.types";

export const useLoginForm = ({ isNew }: IUseLoginFormProps) => {
  const { control, formState, setValue, setFocus, handleSubmit } = useForm({
    defaultValues: { login: "", password: "" },
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const onSubmit = handleSubmit((data) => {
    if (isNew) {
      console.log("Регистрация", data);
    }

    if (!isNew) {
      console.log("Вход", data);
    }
  });

  return { control, onSubmit, setValue, setFocus, formState };
};
