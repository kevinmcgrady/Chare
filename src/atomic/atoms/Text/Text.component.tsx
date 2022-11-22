import cn from 'classnames';
import React, { ReactNode } from 'react';

import styles from './Text.module.scss';
import { getFont, getFontWeight } from './utils';

type TextVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'body'
  | 'caption'
  | 'subTitle';

type Align = 'left' | 'center' | 'right';
type Font = 'spaceMono' | 'workSans';

type TextProps = {
  variant?: TextVariant;
  children: ReactNode;
  align?: Align;
  font?: Font;
};

export const Text: React.FC<TextProps> = ({
  children,
  variant = 'body',
  align = 'left',
  font = 'primary',
}) => {
  const isSecondaryFont = font === 'spaceMono';

  switch (variant) {
    case 'h1':
      return (
        <h1
          className={cn(
            styles.h1,
            styles[align],
            getFont(isSecondaryFont),
            styles[getFontWeight(isSecondaryFont)],
          )}
        >
          {children}
        </h1>
      );
    case 'h2':
      return (
        <h2
          className={cn(
            styles.h2,
            styles[align],
            getFont(isSecondaryFont),
            styles[getFontWeight(isSecondaryFont)],
          )}
        >
          {children}
        </h2>
      );
    case 'subTitle':
      return (
        <h2
          className={cn(
            styles.subTitle,
            styles[align],
            getFont(isSecondaryFont),
          )}
        >
          {children}
        </h2>
      );
    case 'h3':
      return (
        <h3
          className={cn(
            styles.h3,
            styles[align],
            getFont(isSecondaryFont),
            styles[getFontWeight(isSecondaryFont)],
          )}
        >
          {children}
        </h3>
      );
    case 'h4':
      return (
        <h4
          className={cn(
            styles.h4,
            styles[align],
            getFont(isSecondaryFont),
            styles[getFontWeight(isSecondaryFont)],
          )}
        >
          {children}
        </h4>
      );
    case 'h5':
      return (
        <h5
          className={cn(
            styles.h5,
            styles[align],
            getFont(isSecondaryFont),
            styles[getFontWeight(isSecondaryFont)],
          )}
        >
          {children}
        </h5>
      );
    case 'body':
      return (
        <p className={cn(styles.body, styles[align], getFont(isSecondaryFont))}>
          {children}
        </p>
      );
    case 'caption':
      return (
        <p
          className={cn(
            styles.caption,
            styles[align],
            getFont(isSecondaryFont),
          )}
        >
          {children}
        </p>
      );
  }
};
