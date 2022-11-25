import { Icon, IconProps } from '@atomic';
import cn from 'classnames';
import React, { ReactNode } from 'react';

import styles from './Button.module.scss';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  isFullWidth?: boolean;
  icon?: IconProps;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  isFullWidth = false,
  icon,
}) => {
  return (
    <button
      className={cn(
        styles[variant],
        styles.button,
        isFullWidth && styles.isFullWidth,
      )}
    >
      {icon && <Icon className={styles.icon} {...icon} />}
      {children}
    </button>
  );
};
