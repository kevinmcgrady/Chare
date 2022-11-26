import { Icon } from '@atomic';
import React from 'react';

import styles from './SearchBar.module.scss';

export const SearchBar: React.FC = () => {
  return (
    <div className={styles.searchBar}>
      <input type='text' placeholder='Search your favourite NFTs' />
      <Icon type='search' color='primary' />
    </div>
  );
};
