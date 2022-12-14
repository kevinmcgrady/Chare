import Avatar from '@assets/images/Avatar.svg';
import MushroomImage from '@assets/images/mushroom.png';
import {
  Button,
  Container,
  CreatorPin,
  Link,
  Spacing,
  Text,
  Timer,
} from '@atomic';
import { useMediaQuery } from '@hooks';
import Image from 'next/image';
import React from 'react';

import styles from './Featured.module.scss';

type FeaturedProps = {
  url: string;
};

export const Featured: React.FC<FeaturedProps> = ({ url }) => {
  const { isMobile } = useMediaQuery();

  return (
    <div className={styles.container}>
      <Image src={MushroomImage} alt='Mushroom' fill objectFit='cover' />
      <div className={styles.overlay}>
        <Container>
          <div className={styles.details}>
            <div>
              <Spacing bottom='xs'>
                <CreatorPin
                  artistName='Shroomie'
                  image={{ src: Avatar, alt: 'Shroomie' }}
                  variant='withBackground'
                />
              </Spacing>
              <Spacing bottom='xs'>
                <Text variant='h2'>Magic Mushrooms</Text>
              </Spacing>
              {!isMobile && (
                <Link href={url}>
                  <Button
                    icon={{ type: 'eye', color: 'secondary' }}
                    variant='tertiary'
                  >
                    See NFT
                  </Button>
                </Link>
              )}
            </div>
            <Timer />
            <Spacing bottom='xs' />
            {isMobile && (
              <Link href={url}>
                <Button
                  variant='tertiary'
                  icon={{ type: 'eye', color: 'secondary' }}
                  isFullWidth
                >
                  See NFT
                </Button>
              </Link>
            )}
          </div>
        </Container>
      </div>
    </div>
  );
};
