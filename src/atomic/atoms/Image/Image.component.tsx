import cn from 'classnames';
import { default as NextImage, StaticImageData } from 'next/image';
import React from 'react';

import styles from './Image.module.scss';

export type ImageProps = {
  src: StaticImageData;
  alt: string;
  width?: number;
  height?: number;
  isPriority?: boolean;
  isBlurred?: boolean;
  className?: string;
  fill?: boolean;
};

export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  height,
  width,
  isPriority = false,
  isBlurred = false,
  className,
  fill,
}) => {
  return (
    <NextImage
      className={cn(
        !height && !width && styles.image,
        isBlurred && styles.blur,
        className,
      )}
      src={src}
      alt={alt}
      height={height}
      width={width}
      priority={isPriority}
      fill={fill}
    />
  );
};
