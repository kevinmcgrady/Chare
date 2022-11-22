import { spaceMono } from '@styles/fonts';

export const getFont = (isSecondaryFont: boolean) => {
  return isSecondaryFont ? spaceMono.className : '';
};

export const getFontWeight = (isSecondaryFont: boolean) => {
  return isSecondaryFont ? 'secondaryBold' : 'primaryBold';
};
