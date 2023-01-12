import { Image, Text } from '@atomic';
import { CategoryDTO } from '@modules/category';
import React from 'react';

import styles from './CategoryWidget.module.scss';

export type CategoryWidgetProps = {
  category: CategoryDTO;
};

export const CategoryWidget: React.FC<CategoryWidgetProps> = ({
  category: { icon, image, title },
}) => {
  return (
    <div>
      <div data-testid='category' className={styles.image}>
        <div className={styles.overlay}></div>
        <Image
          className={styles.mainImage}
          width={240}
          height={240}
          src={image}
          alt='alt'
        />
        <Image
          className={styles.icon}
          src={icon}
          alt='alt'
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
