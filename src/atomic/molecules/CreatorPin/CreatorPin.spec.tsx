import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { CreatorPin } from './CreatorPin.component';

import Image from '@assets/images/Avatar-1.svg';
import styles from './CreatorPin.module.scss';

test('loads component', async () => {
  render(<CreatorPin artistName='' image={{ alt: 'pin', src: Image }} />);
  expect(screen.getByTestId('creatorPin')).toBeTruthy();
  expect(screen.getByTestId('creatorPin')).toHaveClass(styles.creator);
});

// has image
test('has image', async () => {
  render(<CreatorPin artistName='kev' image={{ alt: 'pin', src: Image }} />);
  expect(screen.getByAltText('pin')).toBeTruthy();
});

// has artist
test('has artist', async () => {
  render(<CreatorPin artistName='kev' image={{ alt: 'pin', src: Image }} />);
  expect(screen.getByText('kev')).toBeTruthy();
});

// varients
test('with background', async () => {
  render(
    <CreatorPin
      variant='withBackground'
      artistName='kev'
      image={{ alt: 'pin', src: Image }}
    />,
  );
  expect(screen.getByTestId('creatorPin')).toHaveClass(styles.withBackground);
});

test('large heading', async () => {
  render(
    <CreatorPin
      variant='large'
      artistName='kev'
      image={{ alt: 'pin', src: Image }}
    />,
  );
  expect(screen.getByRole('heading', { level: 5 })).toBeTruthy();
});

test('extra large heading', async () => {
  render(
    <CreatorPin
      variant='extraLarge'
      artistName='kev'
      image={{ alt: 'pin', src: Image }}
    />,
  );
  expect(screen.getByRole('heading', { level: 5 })).toBeTruthy();
  expect(screen.getByAltText('pin')).toHaveAttribute('width', '60');
  expect(screen.getByAltText('pin')).toHaveAttribute('height', '60');
});
