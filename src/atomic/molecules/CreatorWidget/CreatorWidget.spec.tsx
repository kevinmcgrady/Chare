import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { CreatorWidget } from './CreatorWidget.component';

import Image from '@assets/images/Avatar-1.svg';
import styles from './CreatorWidget.module.scss';

test('loads component', async () => {
  render(
    <CreatorWidget
      authorName=''
      image={{ alt: 'alt', src: Image }}
      index={1}
      totalSavings='10'
      url='http://www.example.com'
    />,
  );
  expect(screen.getByTestId('creatorWidget')).toBeTruthy();
  expect(screen.getByTestId('creatorWidget')).toHaveClass(styles.creatorWidget);
});

test('displays correct props', async () => {
  render(
    <CreatorWidget
      authorName='kev'
      image={{ alt: 'alt', src: Image }}
      index={1}
      totalSavings='10'
      url='http://www.example.com'
    />,
  );
  expect(screen.getByText('kev')).toBeInTheDocument();
  expect(screen.getByAltText('alt')).toBeInTheDocument();
  expect(screen.getByText('1')).toBeInTheDocument();
  expect(screen.getByText('Total Sales: 10')).toBeInTheDocument();
});
