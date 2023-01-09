import React from 'react';

import styles from './MobileNavIcon.module.scss';

type MobileNavIconProps = {
  onClick: () => void;
};

export const MobileNavIcon: React.FC<MobileNavIconProps> = ({ onClick }) => {
  return (
    <div onClick={() => onClick()} className={styles.mobileNavIcon}>
      <span></span>
    </div>
  );
};
