import {useRef, useState} from 'react';

export const useDebouncedValue = (defaultValue?: string) => {
  const [value, setValue] = useState(defaultValue);
  const timeout = useRef<any>();

  const setDebouncedValue = (newValue: string) => {
    timeout.current && clearTimeout(timeout.current);

    timeout.current = setTimeout(() => {
      setValue(newValue);
    }, 250);
  };
  return {value, setValue: setDebouncedValue};
};
