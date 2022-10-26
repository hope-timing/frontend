import { InputHTMLAttributes } from "react";

export interface ITextField extends InputHTMLAttributes<HTMLInputElement> {
  text?: string;
}
