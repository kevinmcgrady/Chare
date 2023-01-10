import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { IconLink } from './IconLink.component';

import styles from './IconLink.module.scss';

test('loads component', async () => {
  render(
    <IconLink
      href='http://www.example.com'
      icon={{ type: 'coinbase', color: 'primary' }}
      text='Icon Link'
    />,
  );
  expect(screen.getByTestId('iconLink')).toBeTruthy();
  expect(screen.getByTestId('iconLink')).toHaveClass(styles.iconLink);
});

test('display icon and link', async () => {
  render(
    <IconLink
      href='http://www.example.com'
      icon={{ type: 'coinbase', color: 'primary' }}
      text='Icon Link'
    />,
  );
  expect(screen.getByText('Icon Link')).toBeInTheDocument();
  expect(screen.getByRole('img')).toBeInTheDocument();
});
