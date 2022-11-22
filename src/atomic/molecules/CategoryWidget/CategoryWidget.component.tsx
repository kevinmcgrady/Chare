import { Image, ImageProps,Text } from '@atomic';
import React from 'react';

import styles from './CategoryWidget.module.scss';

export type CategoryWidgetProps = {
  image: ImageProps;
  icon: ImageProps;
  title: string;
};

export const CategoryWidget: React.FC<CategoryWidgetProps> = ({
  image,
  icon,
  title,
}) => {
  return (
    <div>
      <div className={styles.image}>
        <div className={styles.overlay}></div>
        <Image src={image.src} alt={image.alt} />
        <Image
          className={styles.icon}
          src={icon.src}
          alt={icon.alt}
          width={100}
          height={100}
        />
      </div>
      <div className={styles.cardFooter}>
        <Text variant='h5'>{title}</Text>
      </div>
    </div>
  );
};
