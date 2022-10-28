import useFormInput from './useFormInput';

import { useCallback, useEffect, useRef } from 'react';

type UseDebounce = <T extends (...args: any) => void>(fn: T, time: number) => (...args: Parameters<T>) => void;

export const useDebounce: UseDebounce = (fn, time) => {
  type Fn = typeof fn;

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const fnRef = useRef<Fn>();

  fnRef.current = fn;

  useEffect(
    () => (): void => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      timeoutRef.current && clearTimeout(timeoutRef.current);
    },
    [time],
  );

  return useCallback(
    (...args: Parameters<Fn>) => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        timeoutRef.current = null;
        if (typeof fnRef.current === 'function') {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          fnRef.current(...args);
        }
      }, time);
    },
    [time],
  );
};

export interface IUseFormInputWithDebounce {
  timeout?: number;
  initValue?: string;
  callback?: (str: string) => void;
}

export type DebouncingInputType = {
  onKeyDown: (...args: Parameters<() => void>) => void;
  onChange: (e: any) => void;
  value: string;
};

// logic используется для логики, debouncing в input
export const useFormInputWithDebounce = (props?: IUseFormInputWithDebounce) => {
  const inputDebounce = useFormInput(props?.initValue || '');
  const input = useFormInput(inputDebounce.value);
  const onKeyDown = useDebounce(() => {
    input.setInputValue(inputDebounce.value);
    props?.callback?.(inputDebounce.value);
  }, props?.timeout || 0);

  return {
    logic: input,
    debouncing: {
      onChange: inputDebounce.onChange,
      value: inputDebounce.value,
      onKeyDown,
    },
  };
};
