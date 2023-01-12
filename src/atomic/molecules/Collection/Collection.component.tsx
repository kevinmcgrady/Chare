import { CreatorPin, Grid, Image, Link, Spacing, Text } from '@atomic';
import { CollectionDTO } from '@modules/collection';
import React from 'react';

import styles from './Collection.module.scss';

type CollectionProps = {
  collection: CollectionDTO;
  url: string;
};

export const Collection: React.FC<CollectionProps> = ({
  collection: { additionalImages = [], creator, mainImage, title },
  url,
}) => {
  return (
    <div data-testid='collection'>
      <Link href={url}>
        <Image
          className={styles.image}
          width={330}
          height={330}
          src={mainImage}
          alt='alt'
        />
      </Link>
      <Spacing top='xs'>
        <Grid noOfColumns={3}>
          {additionalImages.map((image) => (
            <Image
              className={styles.image}
              width={100}
              height={100}
              key={image}
              src={image}
              alt='alt'
            />
          ))}
          <div className={styles.stats}>
            <Text variant='h5' font='spaceMono'>
              12
            </Text>
          </div>
        </Grid>
      </Spacing>
      <Spacing top='xs'>
        <Text variant='h5'>{title}</Text>
        <Spacing top='xs'>
          <CreatorPin
            variant='small'
            artistName={creator.username}
            image={{ src: creator.image, alt: creator.username }}
          />
        </Spacing>
      </Spacing>
    </div>
  );
};
