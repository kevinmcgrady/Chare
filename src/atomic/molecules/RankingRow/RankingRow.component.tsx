import Avarar from '@assets/images/Avatar-1.svg';
import { CreatorPin, Pin,Spacing, Text } from '@atomic';
import { useMediaQuery } from '@hooks';
import React from 'react';

import styles from './RankingRow.module.scss';

export const RankingRow: React.FC = () => {
  const { isTablet, isMobile } = useMediaQuery();

  return (
    <Spacing bottom='xs'>
      <div className={styles.row}>
        <div className={styles.grid}>
          <Pin number={1} />
          <CreatorPin
            artistName='Jaydon Ekstrom Bothman'
            image={{ src: Avarar, alt: 'Jaydon Ekstrom Bothman' }}
            variant='extraLarge'
          />
          {!isMobile && (
            <div>
              <Text font='spaceMono' color='green'>
                +1.41%
              </Text>
            </div>
          )}
          {!isTablet && (
            <div>
              <Text font='spaceMono'>602</Text>
            </div>
          )}
          <div>
            <Text font='spaceMono'>12.4 ETH</Text>
          </div>
        </div>
      </div>
    </Spacing>
  );
};
