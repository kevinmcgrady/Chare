import MushroomImage from '@assets/images/mushroom.png';
import Image from 'next/image';
import React from 'react';

import styles from './Featured.module.scss';

export const Featured: React.FC = () => {
  return (
    <div className={styles.container}>
      <Image src={MushroomImage} alt='Mushroom' fill objectFit='cover' />
      <div className={styles.overlay}></div>
    </div>
  );
};
