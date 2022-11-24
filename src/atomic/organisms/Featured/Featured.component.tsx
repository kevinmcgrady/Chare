import MushroomImage from '@assets/images/mushroom.png';
import { Button, Container, CreatorPin, Spacing, Text, Timer } from '@atomic';
import Image from 'next/image';
import React from 'react';

import styles from './Featured.module.scss';

export const Featured: React.FC = () => {
  return (
    <div className={styles.container}>
      <Image src={MushroomImage} alt='Mushroom' fill objectFit='cover' />
      <div className={styles.overlay}>
        <Container>
          <div className={styles.details}>
            <div>
              <Spacing bottom='xs'>
                <CreatorPin />
              </Spacing>
              <Spacing bottom='xs'>
                <Text variant='h2'>Magic Mushrooms</Text>
              </Spacing>
              <Button>See NFT</Button>
            </div>
            <Timer />
          </div>
        </Container>
      </div>
    </div>
  );
};
