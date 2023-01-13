import '@styles/globals.scss';

import { loadPrgressBar } from '@modules/core';
import { GlobalStyles } from '@modules/core/globalStyles';
import type { AppProps } from 'next/app';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from 'src/lib/firebase/client';

loadPrgressBar();

export default function App({ Component, pageProps }: AppProps) {
  const [user, loading] = useAuthState(auth);
  return (
    <div style={{ height: '100vh' }}>
      <GlobalStyles />
      <Component {...pageProps} user={loading ? null : user} />
    </div>
  );
}
