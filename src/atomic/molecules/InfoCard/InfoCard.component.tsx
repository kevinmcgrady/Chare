import { Image, Spacing, Text } from '@atomic';
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
    <div data-testid='infoCard' className={styles.infoCard}>
      <Image src={image.src} alt={image.alt} />
      <div>
        <Text variant='h5' align='center'>
          {title}
        </Text>
        <Spacing bottom='xs' />
        <Text align='center'>{description}</Text>
      </div>
    </div>
  );
};
