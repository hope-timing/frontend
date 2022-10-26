import { IStyleProps, PropsWithHTMLAttributes } from "../../types/app/common";

export type SelectOnChangeType<T extends SelectOptions> = ((value: T | undefined) => void);
export type SelectGetLabelType<Type extends SelectOptions> = (
  value?: Type
) => string;

export interface ISelectProps<T extends SelectOptions> extends IStyleProps {
  value: T;
  optionsList: Array<T>;
  getLabel: SelectGetLabelType<T>;
  onChange?: SelectOnChangeType<T>;
}

export type SelectOptions = {
  id: string;
};

export type SelectProps<T extends SelectOptions> = PropsWithHTMLAttributes<
  ISelectProps<T>,
  HTMLDivElement
>;

export type SelectType = <Type extends SelectOptions>(
  props: SelectProps<Type> & React.RefAttributes<HTMLElement>
) => React.ReactElement | null;
