import cn from 'classnames';
import React, { ReactNode } from 'react';

import styles from './Grid.module.scss';

type GridProps = {
  children: ReactNode;
  noOfColumns: number;
};

export const Grid: React.FC<GridProps> = ({ children, noOfColumns }) => {
  return (
    <div className={cn(styles.grid, styles[`col-${noOfColumns}`])}>
      {children}
    </div>
  );
};
