import { IUseFormInputWithDebounce } from "../../form/useFormInputWithDebounce";

export type UseSearchProps = IUseFormInputWithDebounce;

export type SearchInputType = { onChange: (e: any) => void; value: string; onKeyDown: () => void; loading?: boolean };

export type WithSearchFilter = {
  search: string;
};
export type WithSearchIsLoading = {
  isLoading?: boolean;
  setIsLoading?: (isLoading: boolean) => void;
};
export type WithSearchInput = {
  searchInput: SearchInputType;
  isLoading?: boolean;
};
