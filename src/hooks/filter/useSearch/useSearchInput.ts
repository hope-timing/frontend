import { useFormInputWithDebounce } from "../../form/useFormInputWithDebounce";
import { searchDebounce } from "../../../constants/components/Search/search";
import { UseSearchProps } from "./use-search.types";

export const useSearchInput = (props?: UseSearchProps) => {
  const { debouncing: searchInput, logic: searchInputLogic } =
    useFormInputWithDebounce({
      timeout: props?.timeout || searchDebounce,
      callback: props?.callback,
      initValue: props?.initValue,
    });

  return {
    searchInput,
    searchInputLogic,
  };
};
