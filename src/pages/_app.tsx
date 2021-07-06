import React from 'react';
import { Header } from '@molecules/Header/Header';
import { colors } from '@style/colors';
import { GlobalStyles } from '@style/helpers/GlobalStyles';
import type { AppProps } from 'next/app';
import NextNprogress from 'nextjs-progressbar';
import 'react-image-gallery/styles/css/image-gallery.css';

function InstamotionRecruitmentTask({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <GlobalStyles />
      <NextNprogress color={colors.primary} height={2} />
      <Header />
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <Component {...pageProps} />
    </>
  );
}

export default InstamotionRecruitmentTask;
