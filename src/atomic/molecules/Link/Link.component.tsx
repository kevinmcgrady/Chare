import { Text } from '@atomic';
import cn from 'classnames';
import { default as NextLink, LinkProps as NextLinkProps } from 'next/link';
import React, { ReactNode } from 'react';

import styles from './Link.module.scss';

type LinkProps = NextLinkProps & {
  children: ReactNode;
};

export const Link: React.FC<LinkProps> = ({ children, ...props }) => {
  return (
    <NextLink className={cn(styles.link)} {...props}>
      <Text>{children}</Text>
    </NextLink>
  );
};
