import { IFundsFilter } from "../../funds.types";

export interface IFundsHeader {
  setFilter: React.Dispatch<React.SetStateAction<IFundsFilter>>;
}
