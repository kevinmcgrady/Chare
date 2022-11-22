import { Spacing, Text } from '@atomic';
import React from 'react';

import styles from './Timer.module.scss';

export const Timer: React.FC = () => {
  return (
    <div className={styles.timer}>
      <Spacing bottom='xs'>
        <Text variant='caption' font='spaceMono'>
          Auction ends in:
        </Text>
      </Spacing>

      <div className={styles.time}>
        <Text variant='h3' font='spaceMono'>
          59:
          <Spacing top='xs'>
            <Text variant='caption' font='spaceMono'>
              Hours
            </Text>
          </Spacing>
        </Text>
        <Text variant='h3' font='spaceMono'>
          59:
          <Spacing top='xs'>
            <Text variant='caption' font='spaceMono'>
              Minutes
            </Text>
          </Spacing>
        </Text>
        <Text variant='h3' font='spaceMono'>
          59
          <Spacing top='xs'>
            <Text variant='caption' font='spaceMono'>
              Seconds
            </Text>
          </Spacing>
        </Text>
      </div>
    </div>
  );
};
