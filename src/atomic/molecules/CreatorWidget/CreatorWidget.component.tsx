import { Image, Pin, Text } from '@atomic';
import { CreatorDTO } from '@modules/creator';
import { urls } from '@urls';
import { default as NextLink } from 'next/link';
import React from 'react';

import styles from './CreatorWidget.module.scss';

export type CreatorWidgetProps = {
  creator: CreatorDTO;
  index: number;
};

export const CreatorWidget: React.FC<CreatorWidgetProps> = ({
  creator: { image, username },
  index,
}) => {
  return (
    <NextLink className={styles.link} href={urls.artist.profile(username)}>
      <div data-testid='creatorWidget' className={styles.creatorWidget}>
        <Image src={image} alt='alt' width={120} height={120} />
        <div>
          <Text variant='h5' align='center'>
            {username}
          </Text>
          <Text align='center' color='gray'>
            Total Sales: 100 EHT
          </Text>
        </div>
        <Pin className={styles.pin} number={index} />
      </div>
    </NextLink>
  );
};
