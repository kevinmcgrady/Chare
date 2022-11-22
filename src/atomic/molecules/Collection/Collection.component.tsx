import { Image, ImageProps,Spacing, Text } from '@atomic';
import React from 'react';

import styles from './Collection.module.scss';

export type CollectionProps = {
  mainImage: ImageProps;
  additionalImages: ImageProps[];
  stat: string;
  title: string;
  author: { image: ImageProps; name: string };
};

export const Collection: React.FC<CollectionProps> = ({
  additionalImages = [],
  mainImage,
  stat,
  author,
  title,
}) => {
  return (
    <div>
      <Image src={mainImage.src} alt={mainImage.alt} />
      <Spacing top='xs'>
        <div className={styles.additional}>
          {additionalImages.map((image) => (
            <Image key={image.alt} src={image.src} alt={image.alt} />
          ))}
          <div className={styles.stats}>
            <Text variant='h5' font='spaceMono'>
              {stat}
            </Text>
          </div>
        </div>
      </Spacing>
      <Spacing top='xs'>
        <Text variant='h5'>{title}</Text>
        <Spacing top='xs'>
          <div className={styles.author}>
            <Spacing right='xs'>
              <Image
                src={author.image.src}
                alt={author.image.alt}
                width={24}
                height={24}
              />
            </Spacing>

            <Text>{author.name}</Text>
          </div>
        </Spacing>
      </Spacing>
    </div>
  );
};
