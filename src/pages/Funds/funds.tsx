import React, { useState } from "react";
import { TFund, TFundCategory } from "../../types/responses/funds";
import { FundsHeader } from "./components/Header/funds-header";
import { FundsList } from "./components/List/funds-list";
import { IFundsFilter } from "./funds.types";

const fundsCategories: TFundCategory[] = [
  { id: "1", name: "Помощь детям" },
  { id: "2", name: "Помощь животным" },
  { id: "3", name: "Помощь бездомным" },
];

const funds: TFund[] = [
  {
    logo: "https://yaroshok.ru/wp-content/uploads/2018/12/rich-millionaire-who-distributes-money-1.png",
    name: "Река жизни",
    category: "Помощь детям",
    description: "Оказание материальной и иной помощи Оказание материальной и иной помощи Оказание материальной и иной помощи",
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
    logo: "https://2019.ad-peak.ru/storage/app/uploads/public/5ec/f78/b13/5ecf78b13d268610282046.png",
    name: "Река жизни",
    category: "Помощь детям",
    description: "Оказание материальной и иной помощи Оказание материальной и иной помощи Оказание материальной и иной помощи",
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
    logo: "https://sunnyland-club.ru/wp-content/uploads/2018/08/sun01082.png",
    name: "Река жизни",
    category: "Помощь животным",
    description: "Оказание материальной и иной помощи Оказание материальной и иной помощи Оказание материальной и иной помощи",
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
    logo: "https://cdn.dribbble.com/users/3998490/screenshots/9841785/untitled-4_4x.png",
    name: "Река жизни",
    category: "Помощь животным",
    description: "Оказание материальной и иной помощи Оказание материальной и иной помощи Оказание материальной и иной помощи",
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
    description: "Оказание материальной и иной помощи Оказание материальной и иной помощи Оказание материальной и иной помощи",
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
    logo: "https://2019.ad-peak.ru/storage/app/uploads/public/5ec/f78/b13/5ecf78b13d268610282046.png",
    name: "Река жизни",
    category: "Помощь детям",
    description: "Оказание материальной и иной помощи Оказание материальной и иной помощи Оказание материальной и иной помощи",
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
    logo: "https://sunnyland-club.ru/wp-content/uploads/2018/08/sun01082.png",
    name: "Река жизни",
    category: "Помощь животным",
    description: "Оказание материальной и иной помощи Оказание материальной и иной помощи Оказание материальной и иной помощи",
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
    logo: "https://cdn.dribbble.com/users/3998490/screenshots/9841785/untitled-4_4x.png",
    name: "Река жизни",
    category: "Помощь животным",
    description: "Оказание материальной и иной помощи Оказание материальной и иной помощи Оказание материальной и иной помощи",
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
    description: "Оказание материальной и иной помощи Оказание материальной и иной помощи Оказание материальной и иной помощи",
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
    logo: "https://2019.ad-peak.ru/storage/app/uploads/public/5ec/f78/b13/5ecf78b13d268610282046.png",
    name: "Река жизни",
    category: "Помощь детям",
    description: "Оказание материальной и иной помощи Оказание материальной и иной помощи Оказание материальной и иной помощи",
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
    logo: "https://sunnyland-club.ru/wp-content/uploads/2018/08/sun01082.png",
    name: "Река жизни",
    category: "Помощь животным",
    description: "Оказание материальной и иной помощи Оказание материальной и иной помощи Оказание материальной и иной помощи",
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
    logo: "https://cdn.dribbble.com/users/3998490/screenshots/9841785/untitled-4_4x.png",
    name: "Река жизни",
    category: "Помощь животным",
    description: "Оказание материальной и иной помощи Оказание материальной и иной помощи Оказание материальной и иной помощи",
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
      <FundsHeader setFilter={setFilter} fundsCategories={fundsCategories} />
      <FundsList funds={funds} />
    </div>
  );
};
