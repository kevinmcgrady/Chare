import { spaceMono, workSans } from '@styles/fonts';
import React from 'react';

export const GlobalStyles: React.FC = () => {
  return (
    <style jsx global>{`
      html {
        font-family: ${workSans.style.fontFamily};
      }
      :root {
        --secondaryFont: ${spaceMono.style.fontFamily};
      }
    `}</style>
  );
};
