import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { CategoryWidget } from './CategoryWidget.component';

test('loads component', async () => {
  render(
    <CategoryWidget
      category={{
        icon: 'http://www.example.com',
        image: 'http://www.example.com',
        title: 'Card',
      }}
    />,
  );
  expect(screen.getByTestId('category')).toBeTruthy();
});

// has image
test('has image', async () => {
  render(
    <CategoryWidget
      category={{
        icon: 'http://www.example.com',
        image: 'http://www.example.com',
        title: 'Card',
      }}
    />,
  );
});

// has title
test('has title', async () => {
  render(
    <CategoryWidget
      category={{
        icon: 'http://www.example.com',
        image: 'http://www.example.com',
        title: 'Card',
      }}
    />,
  );
  expect(screen.getByText('Card')).toBeTruthy();
});

// has icon
test('has icon', async () => {
  render(
    <CategoryWidget
      category={{
        icon: 'http://www.example.com',
        image: 'http://www.example.com',
        title: 'Card',
      }}
    />,
  );
});
