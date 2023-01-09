import { Image, ImageProps, Spacing, Text } from '@atomic';
import cn from 'classnames';
import React from 'react';

import styles from './CreatorPin.module.scss';

type CreatorPinVariant = 'small' | 'large' | 'withBackground' | 'extraLarge';

type CreatorPinProps = {
  variant?: CreatorPinVariant;
  image: ImageProps;
  artistName: string;
};

export const CreatorPin: React.FC<CreatorPinProps> = ({
  variant = 'small',
  image,
  artistName,
}) => {
  const hasLargeHeading = ['large', 'extraLarge'].includes(variant);
  const hasLargeImage = variant === 'extraLarge';

  return (
    <div
      className={cn(
        styles.creator,
        variant === 'withBackground' && styles.withBackground,
      )}
    >
      <Spacing right='xs'>
        <Image
          src={image.src}
          alt={image.alt}
          width={hasLargeImage ? 60 : 24}
          height={hasLargeImage ? 60 : 24}
        />
      </Spacing>
      <Text variant={hasLargeHeading ? 'h5' : 'body'}>{artistName}</Text>
    </div>
  );
};
