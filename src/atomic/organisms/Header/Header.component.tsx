import { Link, Spacing } from '@atomic';
import React from 'react';

import styles from './Header.module.scss';

export const Header: React.FC = () => {
  return (
    <Spacing top='md'>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Spacing right='sm'>
            <ul>
              <Spacing right='sm'>
                <li>
                  <Link href='/'>Marketplace</Link>
                </li>
              </Spacing>
              <Spacing right='sm'>
                <li>
                  <Link href='/'>Rankings</Link>
                </li>
              </Spacing>
              <li>
                <Link href='/'>Connect a wallet</Link>
              </li>
            </ul>
          </Spacing>
        </nav>
      </header>
    </Spacing>
  );
};
