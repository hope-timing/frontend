import { TFundCategory } from "../../../../types/responses/funds";
import { IFundsFilter } from "../../funds.types";

export interface IFundsHeader {
  fundsCategories: TFundCategory[];
  setFilter: React.Dispatch<React.SetStateAction<IFundsFilter>>;
}
