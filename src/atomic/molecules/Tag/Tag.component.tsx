import { Text } from '@atomic';
import React from 'react';

import styles from './Tag.module.scss';

type TagProps = {
  title: string;
};

export const Tag: React.FC<TagProps> = ({ title }) => {
  return (
    <div className={styles.tag}>
      <Text>{title}</Text>
    </div>
  );
};
