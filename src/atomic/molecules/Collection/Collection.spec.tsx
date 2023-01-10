import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { Collection } from './Collection.component';
import Image from '@assets/images/Avatar-1.svg';

test('loads component', async () => {
  render(
    <Collection
      additionalImages={[]}
      author={{ image: { alt: 'author', src: Image }, name: 'Kev' }}
      mainImage={{ alt: 'image', src: Image }}
      stat=''
      title=''
      url=''
    />,
  );
  expect(screen.getByTestId('collection')).toBeTruthy();
});

test('loads all props correctly', async () => {
  render(
    <Collection
      additionalImages={[{ alt: 'image1', src: Image }]}
      author={{ image: { alt: 'author', src: Image }, name: 'Kev' }}
      mainImage={{ alt: 'image', src: Image }}
      stat='stat'
      title='title'
      url='url'
    />,
  );
  expect(screen.getByAltText('image1')).toBeTruthy();
  expect(screen.getByAltText('author')).toBeTruthy();
  expect(screen.getByText('Kev')).toBeTruthy();
  expect(screen.getByAltText('image')).toBeTruthy();
  expect(screen.getByText('stat')).toBeTruthy();
  expect(screen.getByText('title')).toBeTruthy();
});
