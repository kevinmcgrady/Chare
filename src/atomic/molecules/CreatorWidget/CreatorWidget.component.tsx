import { Image, Pin, Text } from '@atomic';
import { CreatorDTO } from '@modules/creator';
import { default as NextLink } from 'next/link';
import React from 'react';

import styles from './CreatorWidget.module.scss';

export type CreatorWidgetProps = {
  creator: CreatorDTO;
  url: string;
  index: number;
};

export const CreatorWidget: React.FC<CreatorWidgetProps> = ({
  creator: { image, username },
  url,
  index,
}) => {
  return (
    <NextLink href={url}>
      <div data-testid='creatorWidget' className={styles.creatorWidget}>
        <Image src={image} alt='alt' width={120} height={120} />
        <div>
          <Text variant='h5' align='center'>
            {username}
          </Text>
          <Text align='center' color='gray'>
            Total Sales: 100
          </Text>
        </div>
        <Pin className={styles.pin} number={index} />
      </div>
    </NextLink>
  );
};
