import { Text } from '@atomic';
import cn from 'classnames';
import React from 'react';

import styles from './Pin.module.scss';

type PinProps = {
  number: string | number;
  className?: string;
};

export const Pin: React.FC<PinProps> = ({ number, className }) => {
  return (
    <div className={cn(styles.pin, className)}>
      <Text color='gray'>{number}</Text>
    </div>
  );
};
