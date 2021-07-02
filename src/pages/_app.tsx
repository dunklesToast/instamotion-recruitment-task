import React from 'react';
import { Header } from '@molecules/Header/Header';
import { GlobalStyles } from '@style/helpers/GlobalStyles';
import type { AppProps } from 'next/app';

function InstamotionRecruitmentTask({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <Header />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </>
  );
}

export default InstamotionRecruitmentTask;
