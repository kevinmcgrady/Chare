import RocketIcon from '@assets/icons/RocketLaunch.svg';
import cn from 'classnames';
import Image from 'next/image';
import React, { ReactNode } from 'react';

import styles from './Button.module.scss';

type ButtonVariant = 'primary' | 'secondary';

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
}) => {
  return (
    <button className={cn(styles[variant], styles.button)}>
      <Image
        className={styles.icon}
        width={20}
        height={20}
        src={RocketIcon}
        alt='Rocket'
      />
      {children}
    </button>
  );
};
