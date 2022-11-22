import '@styles/globals.scss';

import { workSans } from '@styles/fonts';
import type { AppProps } from 'next/app';
import React from 'react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={workSans.className}>
      <Component {...pageProps} />
    </main>
  );
}
