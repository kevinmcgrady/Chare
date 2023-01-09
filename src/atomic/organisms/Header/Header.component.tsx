import { Logo, MobileNavIcon, Navigation } from '@atomic';
import { useMediaQuery } from '@hooks';
import { authNavigationUrls,navigationUrls, urls } from '@urls';
import React, { useState } from 'react';

import styles from './Header.module.scss';

type HeaderProps = {
  activeLink?: string;
  navigationUrls: string[];
};

export const Header: React.FC<HeaderProps> = ({ activeLink }) => {
  const { isTablet } = useMediaQuery();
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <React.Fragment>
      <header className={styles.header}>
        {!isTablet && (
          <React.Fragment>
            <Logo url={urls.homepage} />
            <Navigation
              activeLink={activeLink as string}
              navigationUrls={navigationUrls}
              authNavigationUrls={authNavigationUrls}
            />
          </React.Fragment>
        )}
        {isTablet && (
          <React.Fragment>
            <Logo url={urls.homepage} />
            <MobileNavIcon onClick={() => setIsNavOpen(!isNavOpen)} />
          </React.Fragment>
        )}
      </header>
      {isNavOpen && isTablet && (
        <Navigation
          isMobile
          activeLink={activeLink as string}
          navigationUrls={navigationUrls}
          authNavigationUrls={authNavigationUrls}
        />
      )}
    </React.Fragment>
  );
};
