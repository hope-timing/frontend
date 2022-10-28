import React, { useState } from "react";
import { TFund } from "../../types/responses/funds";
import { FundsHeader } from "./components/Header/funds-header";
import { FundsList } from "./components/List/funds-list";
import { IFundsFilter } from "./funds.types";

const funds: TFund[] = [
  {
    logo: "https://yaroshok.ru/wp-content/uploads/2018/12/rich-millionaire-who-distributes-money-1.png",
    name: "Река жизни",
    category: "Помощь детям",
    description:
      "Оказание материальной и иной помощи оставшимся без попечения родителей несовершеннолетним и детям с ограниченными возможностями",
    links: {
      url: "https://www.bfnn.ru/",
      socials: {
        facebook: "https://www.facebook.com/bfnnov/",
        youtube: "https://www.youtube.com/channel/UCMJlQjFbjwLrbM0-2An8Dvg",
        vk: "https://vk.com/bfnnru",
      },
    },
  },
  {
    logo: "https://yaroshok.ru/wp-content/uploads/2018/12/rich-millionaire-who-distributes-money-1.png",
    name: "Река жизни",
    category: "Помощь детям",
    description:
      "Оказание материальной и иной помощи оставшимся без попечения родителей несовершеннолетним и детям с ограниченными возможностями",
    links: {
      url: "https://www.bfnn.ru/",
      socials: {
        facebook: "https://www.facebook.com/bfnnov/",
        youtube: "https://www.youtube.com/channel/UCMJlQjFbjwLrbM0-2An8Dvg",
        vk: "https://vk.com/bfnnru",
      },
    },
  },
  {
    logo: "https://yaroshok.ru/wp-content/uploads/2018/12/rich-millionaire-who-distributes-money-1.png",
    name: "Река жизни",
    category: "Помощь животным",
    description:
      "Оказание материальной и иной помощи оставшимся без попечения родителей несовершеннолетним и детям с ограниченными возможностями",
    links: {
      url: "https://www.bfnn.ru/",
      socials: {
        facebook: "https://www.facebook.com/bfnnov/",
        youtube: "https://www.youtube.com/channel/UCMJlQjFbjwLrbM0-2An8Dvg",
        vk: "https://vk.com/bfnnru",
      },
    },
  },
];

export const Funds = () => {
  const [filter, setFilter] = useState<IFundsFilter>({
    search: "",
    category: "",
  });

  return (
    <div>
      <FundsHeader setFilter={setFilter} />
      <FundsList funds={funds} />
    </div>
  );
};
