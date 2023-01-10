import React, { ReactNode } from 'react';

import styles from './Container.module.scss';

type ContainerProps = {
  children: ReactNode;
};

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div role='main' className={styles.container}>
      {children}
    </div>
  );
};
