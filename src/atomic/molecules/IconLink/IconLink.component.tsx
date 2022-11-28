import { Icon, IconProps,Link, Spacing } from '@atomic';
import React from 'react';

import styles from './IconLink.module.scss';

type IconLinkProps = {
  icon: IconProps;
  href: string;
  text: string;
};

export const IconLink: React.FC<IconLinkProps> = ({ icon, href, text }) => {
  return (
    <div className={styles.iconLink}>
      <Spacing right='xs'>
        <Icon {...icon} />
      </Spacing>
      <Link href={href}>{text}</Link>
    </div>
  );
};
