export const getFont = (isSecondaryFont: boolean) => {
  return isSecondaryFont ? 'secondaryFont' : '';
};

export const getFontWeight = (isSecondaryFont: boolean) => {
  return isSecondaryFont ? 'secondaryBold' : 'primaryBold';
};
