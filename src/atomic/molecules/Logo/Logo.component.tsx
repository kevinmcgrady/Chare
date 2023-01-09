import { Text } from '@atomic';
import { urls } from '@urls';
import { default as NextLink } from 'next/link';
import React from 'react';

import styles from './Logo.module.scss';

export const Logo: React.FC = () => {
  return (
    <NextLink className={styles.link} href={urls.homepage}>
      <Text variant='h3' className={styles.logo}>
        Chare
      </Text>
    </NextLink>
  );
};
