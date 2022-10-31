import { IStyleProps, PropsWithHTMLAttributes } from "../../types/app/common";

export type SelectOnChangeType<Type extends SelectOptions> = (value?: Type) => void;
export type SelectGetLabelType<Type extends SelectOptions> = (value?: Type) => string;
export type SelectGetLabelForInputType<Type extends SelectOptions> = (value?: Type) => string;

export interface ISelectProps<Type extends SelectOptions> extends IStyleProps {
  value?: Type;
  optionsList: Array<Type>;
  onChange?: SelectOnChangeType<Type>;
  getLabel: SelectGetLabelType<Type>;
}

export type SelectOptions = {
  id: string | number;
};

export type SelectProps<Type extends SelectOptions> = PropsWithHTMLAttributes<
  ISelectProps<Type>,
  HTMLDivElement
>;

export type SelectType = <Type extends SelectOptions>(
  props: SelectProps<Type> & React.RefAttributes<HTMLElement>
) => React.ReactElement | null;
