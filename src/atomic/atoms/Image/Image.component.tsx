import cn from 'classnames';
import { default as NextImage, ImageProps as NextImageProps } from 'next/image';
import React from 'react';

import styles from './Image.module.scss';

export type ImageProps = NextImageProps & {
  isBlurred?: boolean;
};

export const Image: React.FC<ImageProps> = ({
  isBlurred = false,
  ...props
}) => {
  return (
    <NextImage
      className={cn(
        isBlurred && styles.blur,
        !props.height && !props.width && styles.image,
      )}
      {...props}
    />
  );
};
