import { Text } from '@atomic';
import cn from 'classnames';
import { default as NextLink, LinkProps as NextLinkProps } from 'next/link';
import React, { ReactNode } from 'react';

import styles from './Link.module.scss';

export type LinkProps = NextLinkProps & {
  children: ReactNode;
  isActive?: boolean;
};

export const Link: React.FC<LinkProps> = ({
  children,
  isActive = false,
  ...props
}) => {
  return (
    <NextLink
      role='link'
      className={cn(styles.link, isActive && styles.isActive)}
      {...props}
    >
      <Text>{children}</Text>
    </NextLink>
  );
};
