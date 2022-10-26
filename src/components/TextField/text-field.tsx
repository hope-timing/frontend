import React from "react";
import Icon from "../Icon";
import { ITextField } from "./text-field.types";
import styles from "./text-field.module.scss";

export const TextField = ({ type, title, placeholder }: ITextField) => {
  return (
    <>
      <Icon type='icon-basket' width={40} />
      <input type={type} placeholder={placeholder} hidden />
    </>
  );
};
