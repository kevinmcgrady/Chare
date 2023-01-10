import { Text } from '@atomic';
import { default as NextLink } from 'next/link';
import React from 'react';

import styles from './Logo.module.scss';

type LogoProps = {
  url: string;
};

export const Logo: React.FC<LogoProps> = ({ url }) => {
  return (
    <NextLink className={styles.link} href={url}>
      <Text variant='h3' className={styles.logo}>
        Chare
      </Text>
    </NextLink>
  );
};
