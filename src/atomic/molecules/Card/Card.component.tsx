import { Image, Spacing, Text } from '@atomic';
import { StaticImageData } from 'next/image';
import React from 'react';

import styles from './Card.module.scss';

export type CardProps = {
  image: StaticImageData;
  title: string;
  author: { image: StaticImageData; name: string };
  isImagePriority?: boolean;
  price?: string;
  highestBid?: string;
};

export const Card: React.FC<CardProps> = ({
  image,
  title,
  isImagePriority = false,
  author,
  price,
  highestBid,
}) => {
  return (
    <div className={styles.card}>
      <Image src={image} alt={title} isPriority={isImagePriority} />
      <div className={styles.bottom}>
        <Spacing bottom='xs'>
          <Text variant='h5'>{title}</Text>
        </Spacing>
        <div className={styles.author}>
          <Spacing right='xs'>
            <Image
              src={author.image}
              alt={author.name}
              width={24}
              height={24}
              isPriority={isImagePriority}
            />
          </Spacing>
          <Text>{author.name}</Text>
        </div>
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
