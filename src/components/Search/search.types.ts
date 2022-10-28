import { IStyleProps } from "../../types/app/common";

export interface ISearchProps
  extends IStyleProps,
    React.InputHTMLAttributes<HTMLInputElement> {
  icon?: boolean;
  isLoading?: boolean;
  searchRef?: React.Ref<HTMLInputElement>;
}
