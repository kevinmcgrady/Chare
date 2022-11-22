import { Image, ImageProps,Text } from '@atomic';
import React from 'react';

import styles from './CreatorWidget.module.scss';

export type CreatorWidgetProps = {
  image: ImageProps;
  authorName: string;
  totalSavings: string;
  index?: number;
};

export const CreatorWidget: React.FC<CreatorWidgetProps> = ({
  image,
  authorName,
  totalSavings,
  index,
}) => {
  return (
    <div className={styles.creatorWidget}>
      <Image src={image.src} alt={image.alt} width={120} height={120} />
      <Text variant='h5' align='center'>
        {authorName}
      </Text>
      <Text align='center'>Total Sales: {totalSavings}</Text>
      <div className={styles.pin}>
        <Text>{index}</Text>
      </div>
    </div>
  );
};
