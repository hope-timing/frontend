import React from "react";
import { useQuery } from "react-query";
import { useAlert } from "react-alert";
import { axios } from "../../services/axios";

export const Dobro = () => {
  const alert = useAlert();
  const { data, isLoading } = useQuery("get-test", () =>
    axios.get("test", { params: { id: "123" } })
  );
  return <div onClick={() => alert.success("yeeeees")}>Dobro</div>;
};
