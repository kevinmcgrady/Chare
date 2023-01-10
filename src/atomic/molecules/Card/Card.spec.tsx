import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { Card } from './Card.component';
import Image from '@assets/images/Avatar-1.svg';
import styles from './Card.module.scss';

test('loads component', async () => {
  render(
    <Card image={Image} title='Card' author={{ image: Image, name: 'Kev' }} />,
  );
  expect(screen.getByTestId('card')).toBeTruthy();
  expect(screen.getByTestId('card')).toHaveClass(styles.card);
});

// title
test('displays title', async () => {
  render(
    <Card image={Image} title='Card' author={{ image: Image, name: 'Kev' }} />,
  );
  expect(screen.getByText('Card')).toBeTruthy();
});

// price and highest bid
test('displays price and highest bid', async () => {
  render(
    <Card
      image={Image}
      title='Card'
      author={{ image: Image, name: 'Kev' }}
      price='10'
      highestBid='100'
    />,
  );
  expect(screen.getByText('10')).toBeTruthy();
  expect(screen.getByText('100')).toBeTruthy();
});
