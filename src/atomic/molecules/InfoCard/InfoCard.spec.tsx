import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { InfoCard } from './InfoCard.component';

import Image from '@assets/images/Avatar-1.svg';
import styles from './InfoCard.module.scss';

test('loads component', async () => {
  render(
    <InfoCard
      description='description'
      image={{ alt: 'alt', src: Image }}
      title='title'
    />,
  );
  expect(screen.getByTestId('infoCard')).toBeTruthy();
  expect(screen.getByTestId('infoCard')).toHaveClass(styles.infoCard);
});

test('component displays props', async () => {
  render(
    <InfoCard
      description='description'
      image={{ alt: 'alt', src: Image }}
      title='title'
    />,
  );
  expect(screen.getByText('description')).toBeInTheDocument();
  expect(screen.getByText('title')).toBeInTheDocument();
  expect(screen.getByAltText('alt')).toBeInTheDocument();
});
