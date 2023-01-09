import { Button, Link, Spacing } from '@atomic';
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
};

export const Navigation: React.FC<NavigationProps> = ({
  isMobile = false,
  navigationUrls = [],
  authNavigationUrls = [],
  activeLink,
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
        </ul>
      </Spacing>
      {authNavigationUrls.map((url) => (
        <Link href={url.href} key={url.text}>
          <Button icon={{ type: 'user', color: 'primary' }}>{url.text}</Button>
        </Link>
      ))}
    </nav>
  );
};
