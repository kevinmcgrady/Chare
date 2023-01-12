import { CreatorPin, Image, Spacing, Text } from '@atomic';
import { StaticImageData } from 'next/image';
import React from 'react';

import styles from './Card.module.scss';

export type CardProps = {
  image: StaticImageData;
  title: string;
  creator: { image: StaticImageData; username: string };
  isImagePriority?: boolean;
  price?: string;
  highestBid?: string;
};

export const Card: React.FC<CardProps> = ({
  image,
  title,
  isImagePriority = false,
  creator,
  price,
  highestBid,
}) => {
  return (
    <div data-testid='card' className={styles.card}>
      <Image src={image} alt={title} priority={isImagePriority} />
      <div className={styles.bottom}>
        <Spacing bottom='xs'>
          <Text variant='h5'>{title}</Text>
        </Spacing>
        <CreatorPin
          variant='small'
          artistName={creator?.username}
          image={{ src: creator?.image, alt: creator?.username }}
        />
        {price && highestBid && (
          <Spacing top='xs'>
            <div className={styles.price}>
              <div>
                <Text variant='caption' font='spaceMono' color='gray'>
                  Price
                </Text>
                <Spacing top='xs'>
                  <Text font='spaceMono'>{price}</Text>
                </Spacing>
              </div>
              <div>
                <Text variant='caption' font='spaceMono' color='gray'>
                  Highest Bid
                </Text>
                <Spacing top='xs'>
                  <Text font='spaceMono'>{highestBid}</Text>
                </Spacing>
              </div>
            </div>
          </Spacing>
        )}
      </div>
    </div>
  );
};
