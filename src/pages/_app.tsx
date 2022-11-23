import '@styles/globals.scss';

import { workSans, spaceMono } from '@styles/fonts';
import type { AppProps } from 'next/app';
import React from 'react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${workSans.style.fontFamily};
        }
        :root {
          --secondaryFont: ${spaceMono.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
