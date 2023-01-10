import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { CategoryWidget } from './CategoryWidget.component';
import Image from '@assets/images/Avatar-1.svg';

test('loads component', async () => {
  render(
    <CategoryWidget
      image={{ alt: '', src: Image }}
      title='Card'
      icon={{ alt: '', src: Image }}
    />,
  );
  expect(screen.getByTestId('category')).toBeTruthy();
});

// has image
test('has image', async () => {
  render(
    <CategoryWidget
      image={{ alt: 'image', src: Image }}
      title='Card'
      icon={{ alt: 'icon', src: Image }}
    />,
  );
  expect(screen.getAllByAltText('image')).toBeTruthy();
});

// has title
test('has title', async () => {
  render(
    <CategoryWidget
      image={{ alt: '', src: Image }}
      title='Card'
      icon={{ alt: '', src: Image }}
    />,
  );
  expect(screen.getByText('Card')).toBeTruthy();
});

// has icon
test('has icon', async () => {
  render(
    <CategoryWidget
      image={{ alt: 'image', src: Image }}
      title='Card'
      icon={{ alt: 'icon', src: Image }}
    />,
  );
  expect(screen.getAllByAltText('icon')).toBeTruthy();
});
