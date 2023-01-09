import {
  CreatorPin,
  Grid,
  Image,
  ImageProps,
  Link,
  Spacing,
  Text,
} from '@atomic';
import React from 'react';

import styles from './Collection.module.scss';

export type CollectionProps = {
  mainImage: ImageProps;
  additionalImages: ImageProps[];
  stat: string;
  title: string;
  author: { image: ImageProps; name: string };
  url: string;
};

export const Collection: React.FC<CollectionProps> = ({
  additionalImages = [],
  mainImage,
  stat,
  author,
  title,
  url,
}) => {
  return (
    <div>
      <Link href={url}>
        <Image src={mainImage.src} alt={mainImage.alt} />
      </Link>
      <Spacing top='xs'>
        <Grid noOfColumns={3}>
          {additionalImages.map((image) => (
            <Image key={image.alt} src={image.src} alt={image.alt} />
          ))}
          <div className={styles.stats}>
            <Text variant='h5' font='spaceMono'>
              {stat}
            </Text>
          </div>
        </Grid>
      </Spacing>
      <Spacing top='xs'>
        <Text variant='h5'>{title}</Text>
        <Spacing top='xs'>
          <CreatorPin
            variant='small'
            artistName={author.name}
            image={{ src: author.image.src, alt: author.image.alt }}
          />
        </Spacing>
      </Spacing>
    </div>
  );
};
