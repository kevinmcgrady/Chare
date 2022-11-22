import { Text } from '@atomic';
import React from 'react';

import styles from './Stats.module.scss';

export const Stats: React.FC = () => {
  return (
    <div className={styles.stats}>
      <div>
        <Text variant='h4' font='spaceMono'>
          240k+
        </Text>
        <Text font='workSans'>Total Sale</Text>
      </div>
      <div>
        <Text variant='h4' font='spaceMono'>
          100k+
        </Text>
        <Text font='workSans'>Auctions</Text>
      </div>
      <div>
        <Text variant='h4' font='spaceMono'>
          220k+
        </Text>
        <Text font='workSans'>Artists</Text>
      </div>
    </div>
  );
};
