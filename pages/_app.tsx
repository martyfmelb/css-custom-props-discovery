import React from 'react';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';

const MyApp = function ({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
};

export default MyApp;
