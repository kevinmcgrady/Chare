import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { Collection } from './Collection.component';

test('loads component', async () => {
  render(
    <Collection
      collection={{
        additionalImages: ['http://www.example.com'],
        creator: {
          emailAddress: 'kevin',
          image: 'http://www.example.com',
          username: 'kev',
        },
        mainImage: 'http://www.example.com',
        title: 'title',
      }}
      url='http://www.example.com'
    />,
  );
  expect(screen.getByTestId('collection')).toBeTruthy();
});

test('loads all props correctly', async () => {
  render(
    <Collection
      collection={{
        additionalImages: ['http://www.example.com'],
        creator: {
          emailAddress: 'kevin',
          image: 'http://www.example.com',
          username: 'kev',
        },
        mainImage: 'http://www.example.com',
        title: 'title',
      }}
      url='http://www.example.com'
    />,
  );
  expect(screen.getByText('kev')).toBeTruthy();
  expect(screen.getByText('title')).toBeTruthy();
});
