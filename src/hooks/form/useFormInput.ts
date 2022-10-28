import React, { ChangeEventHandler, useCallback, useState } from 'react';

export interface IUseFormInput {
  onChange: (e: any) => void;
  value: string;
  setInputValue: (value: ((prevState: string) => string) | string) => void;
}

const useFormInput: (initValue: string) => IUseFormInput = (initValue: string) => {
  const [value, setInputValue] = useState(initValue);

  const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      setInputValue(event?.target?.value || '');
    },
    [setInputValue],
  );
  return {
    value,
    onChange,
    setInputValue,
  };
};

export default useFormInput;
