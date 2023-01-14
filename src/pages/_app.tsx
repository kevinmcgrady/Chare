import '@styles/globals.scss';

import { FirebaseAuthContext } from '@modules/auth';
import { AuthService } from '@modules/auth/service';
import { loadPrgressBar } from '@modules/core';
import { GlobalStyles } from '@modules/core/globalStyles';
import type { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from 'src/lib/firebase/client';

loadPrgressBar();

export default function App({ Component, pageProps }: AppProps) {
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    AuthService.storeAuthCookie();
  }, []);

  return (
    <div style={{ height: '100vh' }}>
      <GlobalStyles />
      <FirebaseAuthContext.Provider value={loading ? null : user}>
        <Component {...pageProps} />
      </FirebaseAuthContext.Provider>
    </div>
  );
}
