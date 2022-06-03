import {useRef, useState} from 'react';

export const useDebouncedValue = () => {
  const [value, setValue] = useState<string>();
  const timeout = useRef<any>();

  const setDebouncedValue = (newValue: string) => {
    timeout.current && clearTimeout(timeout.current);

    timeout.current = setTimeout(() => {
      setValue(newValue);
    }, 500);
  };
  return {value, setValue: setDebouncedValue};
};
