import React from "react";
import { useAlert } from "react-alert";
import { useForm } from "react-hook-form";
import { TProfile } from "../../../types/responses/profile";

export const useProfileForm = ({ profile }: Record<"profile", TProfile>) => {
  const alert = useAlert();
  const { control, formState, setValue, setFocus, handleSubmit } = useForm({
    defaultValues: {
      sex: profile.sex ?? "",
      age: profile.age ?? "",
      city: profile.city ?? "",
      phone: profile.phone ?? "",
      middleName: profile.middleName ?? "",
      lastName: profile.lastName ?? "",
      firstName: profile.firstName ?? "",
    },
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    alert.success("Профиль успешно обновлен!");
  });

  return { control, onSubmit, setValue, setFocus, formState };
};
