import { Image, ImageProps, Pin, Text } from '@atomic';
import { default as NextLink } from 'next/link';
import React from 'react';

import styles from './CreatorWidget.module.scss';

export type CreatorWidgetProps = {
  image: ImageProps;
  authorName: string;
  totalSavings: string;
  index: number;
  url: string;
};

export const CreatorWidget: React.FC<CreatorWidgetProps> = ({
  image,
  authorName,
  totalSavings,
  index,
  url,
}) => {
  return (
    <NextLink href={url}>
      <div data-testid='creatorWidget' className={styles.creatorWidget}>
        <Image src={image.src} alt={image.alt} width={120} height={120} />
        <div>
          <Text variant='h5' align='center'>
            {authorName}
          </Text>
          <Text align='center' color='gray'>
            Total Sales: {totalSavings}
          </Text>
        </div>
        <Pin className={styles.pin} number={index} />
      </div>
    </NextLink>
  );
};
