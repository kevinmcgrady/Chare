import { RankingRow, Spacing,Text } from '@atomic';
import { useMediaQuery } from '@hooks';
import React from 'react';

import styles from './RankingTable.module.scss';

export const RankingTable: React.FC = () => {
  const { isTablet, isMobile } = useMediaQuery();

  return (
    <div>
      <Spacing bottom='xs' top='md'>
        <div className={styles.header}>
          <div className={styles.grid}>
            <Text font='spaceMono' color='gray'>
              #
            </Text>
            <Text font='spaceMono' color='gray'>
              Artist
            </Text>
            {!isMobile && (
              <Text font='spaceMono' color='gray'>
                Change
              </Text>
            )}
            {!isTablet && (
              <Text font='spaceMono' color='gray'>
                NFTs Sold
              </Text>
            )}
            <Text font='spaceMono' color='gray'>
              Volume
            </Text>
          </div>
        </div>
      </Spacing>
      <RankingRow />
      <RankingRow />
      <RankingRow />
      <RankingRow />
    </div>
  );
};
