import Avatar from '@assets/images/Avatar.svg';
import SpaceWalking from '@assets/images/spaceWalking.png';
import { Button, Card, Link, Spacing, Stats, Text } from '@atomic';
import { useMediaQuery } from '@hooks';
import { urls } from '@urls';
import React from 'react';

import styles from './Hero.module.scss';

export const Hero: React.FC = () => {
  const { isMobile } = useMediaQuery();

  return (
    <Spacing top={isMobile ? 'sm' : 'lg'} bottom={isMobile ? 'sm' : 'lg'}>
      <section className={styles.hero}>
        <div>
          <Spacing bottom='sm'>
            <Text variant='h1'>Discover digital art &amp; Collect NFTs</Text>
          </Spacing>
          <Text variant='subTitle'>
            NFT marketplace UI created with Anima for Figma. Collect, buy and
            sell art from more than 20k NFT artists.
          </Text>
          {!isMobile && (
            <>
              <Spacing top='sm' bottom='md'>
                <Link href={urls.nft.marketplace}>
                  <Button icon={{ type: 'rocket', color: 'primary' }}>
                    Get Started
                  </Button>
                </Link>
              </Spacing>
              <Stats />
            </>
          )}
        </div>
        <Card
          creator={{ image: Avatar, username: 'animakid' }}
          image={SpaceWalking}
          title='Space Walking'
          isImagePriority
        />
        {isMobile && (
          <>
            <Button isFullWidth>Get Started</Button>
            <Stats />
          </>
        )}
      </section>
    </Spacing>
  );
};
