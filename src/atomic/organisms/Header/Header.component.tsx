import { Button, Link, Spacing } from '@atomic';
import { useMediaQuery } from '@hooks';
import { urls } from '@urls';
import React, { useState } from 'react';

import styles from './Header.module.scss';

export const Header: React.FC = () => {
  const { isTablet } = useMediaQuery();
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <Spacing top='md'>
      <header className={styles.header}>
        {!isTablet && (
          <nav className={styles.nav}>
            <Spacing right='sm'>
              <ul className={styles.navList}>
                <Spacing right='sm'>
                  <li>
                    <Link href={urls.marketplace}>Marketplace</Link>
                  </li>
                </Spacing>
                <Spacing right='sm'>
                  <li>
                    <Link href={urls.rankings}>Rankings</Link>
                  </li>
                </Spacing>
                <li>
                  <Link href={urls.connectWallet}>Connect a wallet</Link>
                </li>
              </ul>
            </Spacing>
            <Button icon={{ type: 'user', color: 'primary' }}>Sign Up</Button>
          </nav>
        )}
        {isTablet && (
          <div
            onClick={() => setIsNavOpen(!isNavOpen)}
            className={styles.mobileNavIcon}
          >
            <span></span>
          </div>
        )}
      </header>
      {isNavOpen && isTablet && (
        <div className={styles.mobileNav}>
          <ul>
            <Spacing bottom='xs'>
              <li>
                <Link href={urls.marketplace}>Marketplace</Link>
              </li>
            </Spacing>
            <Spacing bottom='xs'>
              <li>
                <Link href={urls.rankings}>Rankings</Link>
              </li>
            </Spacing>
            <li>
              <Link href={urls.connectWallet}>Connect a wallet</Link>
            </li>
          </ul>
          <Spacing top='xs'>
            <Button isFullWidth icon={{ type: 'user', color: 'primary' }}>
              Sign Up
            </Button>
          </Spacing>
        </div>
      )}
    </Spacing>
  );
};
