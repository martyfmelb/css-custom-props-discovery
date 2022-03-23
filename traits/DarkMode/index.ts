import { useCallback, useEffect, useRef } from 'react';

// eslint-disable-next-line no-unused-vars
export default function useDarkMode(): [darkMode: boolean, setDarkMode: (value?: boolean) => void] {
  const darkMode = useRef<boolean>(false);

  const setDarkMode = useCallback((value?: boolean) => {
    darkMode.current = !!value;
    document.documentElement.classList.toggle('darkMode', darkMode.current);
  }, []);

  useEffect(
    () => () => {
      document.documentElement.classList.remove('darkMode');
    },
    [],
  );

  return [darkMode.current, setDarkMode];
}
