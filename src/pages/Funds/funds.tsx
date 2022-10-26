import React from "react";
import { Controller, useForm } from "react-hook-form";
import { TextField } from "../../components/TextField/text-field";

export const Funds = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data.test);
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <Controller
          control={control}
          name="test"
          render={({ field }) => (
            <TextField
              {...field}
              type="text"
              placeholder="Поиск"
              icon="icon-search"
              iconWidth={15}
            />
          )}
        ></Controller>
        <button type="submit">Тест!</button>
      </form>
    </div>
  );
};
