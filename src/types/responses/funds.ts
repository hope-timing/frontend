import { TLink } from "./links";

export type TFund = {
  logo: string;
  name: string;
  category: string;
  description: string;
  links: TLink;
};

export type TFundCategory = {
  id: string;
  name: string;
};
