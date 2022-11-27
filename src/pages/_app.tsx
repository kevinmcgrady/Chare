import '@styles/globals.scss';

import { spaceMono, workSans } from '@styles/fonts';
import type { AppProps } from 'next/app';
import React from 'react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div style={{ height: '100vh' }}>
      <style jsx global>{`
        html {
          font-family: ${workSans.style.fontFamily};
        }
        :root {
          --secondaryFont: ${spaceMono.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </div>
  );
}
