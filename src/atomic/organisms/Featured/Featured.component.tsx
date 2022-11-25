import MushroomImage from '@assets/images/mushroom.png';
import { Button, Container, CreatorPin, Spacing, Text, Timer } from '@atomic';
import { useMediaQuery } from '@hooks';
import Image from 'next/image';
import React from 'react';

import styles from './Featured.module.scss';

export const Featured: React.FC = () => {
  const { isMobile } = useMediaQuery();

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
              {!isMobile && (
                <Button
                  icon={{ type: 'eye', color: 'secondary' }}
                  variant='tertiary'
                >
                  See NFT
                </Button>
              )}
            </div>
            <Timer />
            <Spacing bottom='xs' />
            {isMobile && (
              <Button
                variant='tertiary'
                icon={{ type: 'eye', color: 'secondary' }}
                isFullWidth
              >
                See NFT
              </Button>
            )}
          </div>
        </Container>
      </div>
    </div>
  );
};
