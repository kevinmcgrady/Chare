import '../src/styles/globals.scss';
import '../src/styles/storybook.styles.scss';
import * as NextImage from 'next/image';
import * as NextLink from 'next/link';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) =>
    props.fill ? (
      <OriginalNextImage {...props} unoptimized />
    ) : (
      <img {...props} />
    ),
});

Object.defineProperty(NextLink, 'default', {
  configurable: true,
  value: (props) => <a {...props}>{props.children}</a>,
});
