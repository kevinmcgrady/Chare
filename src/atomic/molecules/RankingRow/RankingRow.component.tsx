import Avarar from '@assets/images/Avatar-1.svg';
import { Image, Spacing,Text } from '@atomic';
import { useMediaQuery } from '@hooks';
import React from 'react';

import styles from './RankingRow.module.scss';

export const RankingRow: React.FC = () => {
  const { isTablet, isMobile } = useMediaQuery();

  return (
    <Spacing bottom='xs'>
      <div className={styles.row}>
        <div className={styles.grid}>
          <div className={styles.pin}>
            <Text font='spaceMono' color='gray'>
              1
            </Text>
          </div>
          <div className={styles.avarar}>
            <Image width={60} height={60} src={Avarar} alt='Avatar' />
            <Text variant='h5'>Jaydon Ekstrom Bothman</Text>
          </div>
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
