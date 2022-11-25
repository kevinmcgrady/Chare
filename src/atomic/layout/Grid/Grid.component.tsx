import cn from 'classnames';
import React, { ReactNode } from 'react';

import styles from './Grid.module.scss';

type GridProps = {
  children: ReactNode;
  noOfColumns: number;
  noOfTabletColumns?: number;
  noOfMobileCols?: number;
};

export const Grid: React.FC<GridProps> = ({
  children,
  noOfColumns,
  noOfTabletColumns,
  noOfMobileCols,
}) => {
  return (
    <div
      className={cn(
        styles.grid,
        styles[`col-${noOfColumns}`],
        styles[`col-tablet-${noOfTabletColumns}`],
        styles[`col-mobile-${noOfMobileCols}`],
      )}
    >
      {children}
    </div>
  );
};
