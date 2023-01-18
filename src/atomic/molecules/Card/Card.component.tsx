import { CreatorPin, Image, Spacing, Text } from '@atomic';
import cn from 'classnames';
import { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';

import styles from './Card.module.scss';

export type CardProps = {
  image: StaticImageData | string;
  title: string;
  creator: { image: StaticImageData | string; username: string };
  isImagePriority?: boolean;
  price?: string;
  highestBid?: string;
  url: string;
  className?: string;
};

export const Card: React.FC<CardProps> = ({
  image,
  title,
  isImagePriority = false,
  creator,
  price,
  highestBid,
  url,
  className,
}) => {
  return (
    <Link className={styles.link} href={url}>
      <div data-testid='card' className={cn(styles.card, className)}>
        <Image
          className={styles.image}
          width={300}
          height={300}
          src={image}
          alt={title}
          priority={isImagePriority}
        />
        <div className={styles.bottom}>
          <Spacing bottom='xs'>
            <Text variant='h5'>{title}</Text>
          </Spacing>
          <CreatorPin
            variant='small'
            artistName={creator.username}
            image={{ src: creator.image, alt: creator.username }}
          />
          {price && highestBid && (
            <Spacing top='xs'>
              <div className={styles.price}>
                <div>
                  <Text variant='caption' font='spaceMono' color='gray'>
                    Price
                  </Text>
                  <Spacing top='xs'>
                    <Text font='spaceMono'>{price} EHT</Text>
                  </Spacing>
                </div>
                <div>
                  <Text variant='caption' font='spaceMono' color='gray'>
                    Highest Bid
                  </Text>
                  <Spacing top='xs'>
                    <Text font='spaceMono'>{highestBid} EHT</Text>
                  </Spacing>
                </div>
              </div>
            </Spacing>
          )}
        </div>
      </div>
    </Link>
  );
};
