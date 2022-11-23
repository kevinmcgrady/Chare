import { Image, Spacing,Text } from '@atomic';
import { StaticImageData } from 'next/image';
import React from 'react';

import styles from './InfoCard.module.scss';

type InfoCardProps = {
  image: {
    src: StaticImageData;
    alt: string;
  };
  title: string;
  description: string;
};

export const InfoCard: React.FC<InfoCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className={styles.infoCard}>
      <Image src={image.src} alt={image.alt} />
      <Spacing bottom='xs'>
        <Text variant='h5' align='center'>
          {title}
        </Text>
      </Spacing>
      <Text align='center'>{description}</Text>
    </div>
  );
};
