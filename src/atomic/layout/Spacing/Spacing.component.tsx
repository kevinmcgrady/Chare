import cn from 'classnames';
import React, { ReactNode } from 'react';

import styles from './Spacing.module.scss';

type Size = 'xs' | 'sm' | 'md' | 'lg';

type SpacingProps = {
  children?: ReactNode;
  top?: Size;
  right?: Size;
  bottom?: Size;
  left?: Size;
};

export const Spacing: React.FC<SpacingProps> = ({
  children,
  top,
  right,
  bottom,
  left,
}) => {
  return (
    <div
      role='presentation'
      className={cn(
        top && styles[`top-${top}`],
        right && styles[`right-${right}`],
        bottom && styles[`bottom-${bottom}`],
        left && styles[`left-${left}`],
      )}
    >
      {children}
    </div>
  );
};
