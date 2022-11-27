import { Button, Link, Spacing, Text } from '@atomic';
import { useMediaQuery } from '@hooks';
import { urls } from '@urls';
import React, { useState } from 'react';

import styles from './Header.module.scss';

type HeaderProps = {
  activeLink?: string;
};

export const Header: React.FC<HeaderProps> = ({ activeLink }) => {
  const { isTablet } = useMediaQuery();
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <Spacing top='md'>
      <header className={styles.header}>
        {!isTablet && (
          <>
            <Text variant='h3' className={styles.logo}>
              Chare
            </Text>
            <nav className={styles.nav}>
              <Spacing right='sm'>
                <ul className={styles.navList}>
                  <Spacing right='sm'>
                    <li>
                      <Link
                        isActive={activeLink === urls.marketplace}
                        href={urls.marketplace}
                      >
                        Marketplace
                      </Link>
                    </li>
                  </Spacing>
                  <Spacing right='sm'>
                    <li>
                      <Link
                        isActive={activeLink === urls.rankings}
                        href={urls.rankings}
                      >
                        Rankings
                      </Link>
                    </li>
                  </Spacing>
                  <li>
                    <Link
                      isActive={activeLink === urls.connectWallet}
                      href={urls.connectWallet}
                    >
                      Connect a wallet
                    </Link>
                  </li>
                </ul>
              </Spacing>
              <Link href={urls.createAccount}>
                <Button icon={{ type: 'user', color: 'primary' }}>
                  Sign Up
                </Button>
              </Link>
            </nav>
          </>
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
            <Link href={urls.createAccount}>
              <Button isFullWidth icon={{ type: 'user', color: 'primary' }}>
                Sign Up
              </Button>
            </Link>
          </Spacing>
        </div>
      )}
    </Spacing>
  );
};
