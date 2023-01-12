import { Button, Link, Spacing } from '@atomic';
import { urls } from '@urls';
import cn from 'classnames';
import React from 'react';

import styles from './Navigation.module.scss';

type NavigationUrl = {
  text: string;
  href: string;
};

type NavigationProps = {
  isMobile?: boolean;
  navigationUrls: NavigationUrl[];
  authNavigationUrls: NavigationUrl[];
  activeLink: string;
  isLoggedIn?: boolean;
  logout?: () => void;
};

export const Navigation: React.FC<NavigationProps> = ({
  isMobile = false,
  navigationUrls = [],
  authNavigationUrls = [],
  activeLink,
  isLoggedIn = false,
  logout,
}) => {
  return (
    <nav className={cn(isMobile ? styles.mobileNav : styles.nav)}>
      <Spacing right='sm'>
        <ul className={cn(!isMobile && styles.navList)}>
          {navigationUrls.map((url) => (
            <Spacing
              key={url.text}
              right={isMobile ? undefined : 'sm'}
              bottom={isMobile ? 'sm' : undefined}
            >
              <li>
                <Link isActive={activeLink === url.href} href={url.href}>
                  {url.text}
                </Link>
              </li>
            </Spacing>
          ))}
          {isLoggedIn && (
            <Spacing
              right={isMobile ? undefined : 'sm'}
              bottom={isMobile ? 'sm' : undefined}
            >
              <li>
                <Link
                  isActive={activeLink === urls.artist.profile('fred')}
                  href={urls.artist.profile('fred')}
                >
                  Profile
                </Link>
              </li>
            </Spacing>
          )}
        </ul>
      </Spacing>
      {!isLoggedIn &&
        authNavigationUrls.map((url) => (
          <Link href={url.href} key={url.text}>
            <Button icon={{ type: 'user', color: 'primary' }}>
              {url.text}
            </Button>
          </Link>
        ))}
      {isLoggedIn && (
        <Button onClick={logout} icon={{ type: 'user', color: 'primary' }}>
          Log out
        </Button>
      )}
    </nav>
  );
};
