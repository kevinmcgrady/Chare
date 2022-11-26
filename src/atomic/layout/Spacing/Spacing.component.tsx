import cn from 'classnames';
import React, { ReactNode } from 'react';

import styles from './Spacing.module.scss';

type Size = 'xs' | 'sm' | 'md' | 'lg';

type SpacingProps = {
  style?: Object;
  children?: ReactNode;
  top?: Size;
  right?: Size;
  bottom?: Size;
  left?: Size;
};

export const Spacing: React.FC<SpacingProps> = ({
  style,
  children,
  top,
  right,
  bottom,
  left,
}) => {
  return (
    <div
      style={style}
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
