import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button } from "../../../../components/Button/button";
import { SelectField } from "../../../../components/SelectField/select-field";
import { IFundsHeader } from "./funds-header.types";
import { Search } from "../../../../components/Search/search";
import { useSearchInput } from "../../../../hooks/filter/useSearch/useSearchInput";
import styles from "./funds-header.module.scss";
import { ToggleSearch } from "../../../../components/ToggleSearch/toggle-search";

export const FundsHeader = ({ setFilter }: IFundsHeader) => {
  const { control } = useForm();
  const { searchInputLogic, searchInput } = useSearchInput();

  useEffect(() => {
    setFilter((prevState) => {
      return { ...prevState, search: searchInputLogic.value };
    });
  }, [searchInputLogic.value, setFilter]);

  return (
    <div className={styles.header}>
      <Controller
        control={control}
        name="select"
        render={({ field: { onChange, value } }) => (
          <SelectField
            value={value}
            placeholder="Категория"
            optionsList={[{ id: "123", name: "Игорь" }]}
            getLabel={(option) => option?.name ?? ""}
            onChange={(value) => {
              setFilter((prevState) => {
                return { ...prevState, category: value?.name };
              });
              onChange(value);
            }}
          />
        )}
      ></Controller>
      <div className={styles["header__right-side"]}>
        <div className={styles["header__search"]}>
          <ToggleSearch {...searchInput} />
        </div>
        <Button
          title="Добавить фонд"
          icon="icon-plus"
          onClick={() => {}}
          type="submit"
        >
          Добавить фонд
        </Button>
      </div>
    </div>
  );
};
