import Avatar from '@assets/images/Avatar.svg';
import SpaceWalking from '@assets/images/spaceWalking.png';
import { Button, Card, Spacing, Stats,Text } from '@atomic';
import React from 'react';

import styles from './Hero.module.scss';

export const Hero: React.FC = () => {
  return (
    <Spacing top='lg' bottom='lg'>
      <section className={styles.hero}>
        <div>
          <Spacing bottom='sm'>
            <Text variant='h1'>Discover digital art &amp; Collect NFTs</Text>
          </Spacing>
          <Text variant='subTitle'>
            NFT marketplace UI created with Anima for Figma. Collect, buy and
            sell art from more than 20k NFT artists.
          </Text>
          <Spacing top='sm' bottom='md'>
            <Button>Get Started</Button>
          </Spacing>
          <Stats />
        </div>
        <Card
          author={{ image: Avatar, name: 'animakid' }}
          image={SpaceWalking}
          title='Space Walking'
          isImagePriority
        />
      </section>
    </Spacing>
  );
};
