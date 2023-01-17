import { Logo, MobileNavIcon, Navigation } from '@atomic';
import { useMediaQuery } from '@hooks';
import { authNavigationUrls, navigationUrls, urls } from '@urls';
import React, { useState } from 'react';

import styles from './Header.module.scss';

type HeaderProps = {
  activeLink?: string;
  isLoggedIn: boolean;
  logout: () => void;
};

export const Header: React.FC<HeaderProps> = ({
  activeLink,
  isLoggedIn,
  logout,
}) => {
  const { isTablet } = useMediaQuery();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navigationProps = {
    isLoggedIn,
    logout,
    activeLink: activeLink as string,
    navigationUrls: navigationUrls,
    authNavigationUrls: authNavigationUrls,
  };

  return (
    <React.Fragment>
      <header className={styles.header}>
        {!isTablet && (
          <React.Fragment>
            <Logo url={urls.homepage} />
            <Navigation {...navigationProps} />
          </React.Fragment>
        )}
        {isTablet && (
          <React.Fragment>
            <Logo url={urls.homepage} />
            <MobileNavIcon onClick={() => setIsNavOpen(!isNavOpen)} />
          </React.Fragment>
        )}
      </header>
      {isNavOpen && isTablet && <Navigation isMobile {...navigationProps} />}
    </React.Fragment>
  );
};
