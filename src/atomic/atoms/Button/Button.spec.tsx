import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Button } from './Button.component';
import styles from './Button.module.scss';

test('loads component', async () => {
  render(<Button>Welcome</Button>);
  expect(screen.getByRole('button')).toHaveTextContent('Welcome');
  expect(screen.getByRole('button')).toHaveClass(styles.button);
});

test('primary', async () => {
  render(<Button variant='primary'>Primary</Button>);
  expect(screen.getByRole('button')).toHaveClass(styles.primary);
});

test('secondary', async () => {
  render(<Button variant='secondary'>Secondary</Button>);
  expect(screen.getByRole('button')).toHaveClass(styles.secondary);
});

test('tertiary', async () => {
  render(<Button variant='tertiary'>Tertiary</Button>);
  expect(screen.getByRole('button')).toHaveClass(styles.tertiary);
});

test('wallet', async () => {
  render(<Button variant='wallet'>Wallet</Button>);
  expect(screen.getByRole('button')).toHaveClass(styles.wallet);
});

test('is full width', async () => {
  render(<Button isFullWidth>Full width</Button>);
  expect(screen.getByRole('button')).toHaveClass(styles.isFullWidth);
});

test('has icon', async () => {
  render(<Button icon={{ type: 'coinbase', color: 'primary' }}>Icon</Button>);
  expect(screen.getByRole('img')).toBeTruthy();
});
