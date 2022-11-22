import Avatar from '@assets/images/Avatar.svg';
import { Image, Spacing, Text } from '@atomic';
import React from 'react';

import styles from './CreatorPin.module.scss';

export const CreatorPin: React.FC = () => {
  return (
    <div className={styles.creator}>
      <Spacing right='xs'>
        <Image src={Avatar} alt='Shroomie' width={24} height={24} />
      </Spacing>
      <Text>Shroomie</Text>
    </div>
  );
};
