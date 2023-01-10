import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import { Icon } from './Icon.component';

test('loads component', async () => {
  render(<Icon type='coinbase' />);
  expect(screen.getByRole('img')).toBeTruthy();
});

test('is primary', async () => {
  render(<Icon color='primary' type='rocket' />);
  expect(screen.getByRole('img')).toHaveAttribute('color', '#ffffff');
});

test('is secondary', async () => {
  render(<Icon color='secondary' type='rocket' />);
  expect(screen.getByRole('img')).toHaveAttribute('color', '#a259ff');
});

test('has classname', async () => {
  render(<Icon color='secondary' type='rocket' className='fred' />);
  expect(screen.getByRole('img')).toHaveClass('fred');
});
