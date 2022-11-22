import { Spacing,Text } from '@atomic';
import React from 'react';

import styles from './Header.module.scss';

export const Header: React.FC = () => {
  return (
    <Spacing top='md'>
      <header className={styles.header}>
        <Text variant='h3'>Chare</Text>
        <nav className={styles.nav}>
          <Spacing right='sm'>
            <ul>
              <Spacing right='sm'>
                <li>
                  <strong>Marketplace</strong>
                </li>
              </Spacing>
              <Spacing right='sm'>
                <li>
                  <strong>Rankings</strong>
                </li>
              </Spacing>
              <li>
                <strong>Connect a wallet</strong>
              </li>
            </ul>
          </Spacing>
        </nav>
      </header>
    </Spacing>
  );
};
