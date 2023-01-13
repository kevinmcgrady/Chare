import { CreatorPin, Pin, Spacing, Text } from '@atomic';
import { useMediaQuery } from '@hooks';
import { CreatorDTO } from '@modules/creator';
import React from 'react';

import styles from './RankingRow.module.scss';

type RankingRowProps = {
  creator: CreatorDTO;
};

export const RankingRow: React.FC<RankingRowProps> = ({ creator }) => {
  const { isTablet, isMobile } = useMediaQuery();

  return (
    <Spacing bottom='xs'>
      <div className={styles.row}>
        <div className={styles.grid}>
          <Pin number={1} />
          <CreatorPin
            artistName={creator.username}
            image={{ src: creator.image, alt: creator.username }}
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
