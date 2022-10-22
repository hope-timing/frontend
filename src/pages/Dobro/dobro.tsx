import React from "react";
import { useAlert } from "react-alert";

export const Dobro = () => {
  const alert = useAlert();
  return <div onClick={() => alert.success("yeeeees")}>Dobro</div>;
};
