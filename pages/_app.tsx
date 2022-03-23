import React, { useMemo } from 'react';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import useDarkMode from '../traits/DarkMode';
import useMouseCssCustomProps from '../traits/MouseCssCustomProps';

export const DarkModeContext = React.createContext<ReturnType<typeof useDarkMode>>([
  false,
  // eslint-disable-next-line no-unused-vars
  (value?: boolean) => {},
]);

export const MouseCssCustomPropsContext = React.createContext<
  ReturnType<typeof useMouseCssCustomProps>
  // eslint-disable-next-line no-unused-vars
>([false, (active?: boolean) => {}]);

function MyApp({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useDarkMode();
  const darkModeContextValue = useMemo<ReturnType<typeof useDarkMode>>(
    () => [darkMode, setDarkMode],
    [darkMode, setDarkMode],
  );

  const [mouseCssCustomProps, setMouseCssCustomProps] = useMouseCssCustomProps(false);
  const mouseCssCustomPropsContextValue = useMemo<ReturnType<typeof useMouseCssCustomProps>>(
    () => [mouseCssCustomProps, setMouseCssCustomProps],
    [darkMode, setDarkMode],
  );

  return (
    <MouseCssCustomPropsContext.Provider value={mouseCssCustomPropsContextValue}>
      <DarkModeContext.Provider value={darkModeContextValue}>
        <Component {...pageProps} />
      </DarkModeContext.Provider>
    </MouseCssCustomPropsContext.Provider>
  );
}

export default MyApp;
