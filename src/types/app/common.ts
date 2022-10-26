import React, { CSSProperties } from "react";

export interface IStyleProps {
  className?: string;
  style?: CSSProperties;
}

export type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;

export type WithChildren = {
  children: React.ReactNode;
};

export type PropsWithHTMLAttributes<Props, HTMLElement> = Props &
  Omit<React.HTMLAttributes<HTMLElement>, keyof Props | "css">;

export type WithRef = {
  ref?: React.RefObject<HTMLDivElement>;
};
