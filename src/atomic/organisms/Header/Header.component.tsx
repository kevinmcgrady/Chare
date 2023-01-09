import { Button, Link, Logo, Spacing } from '@atomic';
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
    <>
      <header className={styles.header}>
        {!isTablet && (
          <>
            <Logo />
            <nav className={styles.nav}>
              <Spacing right='sm'>
                <ul className={styles.navList}>
                  <Spacing right='sm'>
                    <li>
                      <Link
                        isActive={activeLink === urls.nft.marketplace}
                        href={urls.nft.marketplace}
                      >
                        Marketplace
                      </Link>
                    </li>
                  </Spacing>
                  <Spacing right='sm'>
                    <li>
                      <Link
                        isActive={activeLink === urls.artist.rankings}
                        href={urls.artist.rankings}
                      >
                        Rankings
                      </Link>
                    </li>
                  </Spacing>
                  <li>
                    <Link
                      isActive={activeLink === urls.auth.connectWallet}
                      href={urls.auth.connectWallet}
                    >
                      Connect a wallet
                    </Link>
                  </li>
                </ul>
              </Spacing>
              <Link href={urls.auth.createAccount}>
                <Button icon={{ type: 'user', color: 'primary' }}>
                  Sign Up
                </Button>
              </Link>
            </nav>
          </>
        )}
        {isTablet && (
          <>
            <Logo />
            <div
              onClick={() => setIsNavOpen(!isNavOpen)}
              className={styles.mobileNavIcon}
            >
              <span></span>
            </div>
          </>
        )}
      </header>
      {isNavOpen && isTablet && (
        <div className={styles.mobileNav}>
          <ul>
            <Spacing bottom='xs'>
              <li>
                <Link href={urls.nft.marketplace}>Marketplace</Link>
              </li>
            </Spacing>
            <Spacing bottom='xs'>
              <li>
                <Link href={urls.artist.rankings}>Rankings</Link>
              </li>
            </Spacing>
            <li>
              <Link href={urls.auth.connectWallet}>Connect a wallet</Link>
            </li>
          </ul>
          <Spacing top='xs'>
            <Link href={urls.auth.createAccount}>
              <Button isFullWidth icon={{ type: 'user', color: 'primary' }}>
                Sign Up
              </Button>
            </Link>
          </Spacing>
        </div>
      )}
    </>
  );
};
