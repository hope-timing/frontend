import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Button } from "../../components/Button/button";
import { SelectField } from "../../components/SelectField/select-field";
import { TextField } from "../../components/TextField/text-field";

export const Funds = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form>
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
        <br></br>
        <Controller
          control={control}
          name="select"
          render={({ field: { onChange, value } }) => (
            <SelectField
              value={value}
              placeholder="Категория"
              optionsList={[{ id: "123" }]}
              getLabel={(option) => option?.id ?? ""}
              onChange={onChange}
            />
          )}
        ></Controller>
        <br></br>
        <Button title="Тест1!" onClick={() => onSubmit()} type="submit">
          Тест1!
        </Button>
      </form>
    </div>
  );
};
