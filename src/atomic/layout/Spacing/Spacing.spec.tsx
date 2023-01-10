import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { Spacing } from './Spacing.component';

import styles from './Spacing.module.scss';

test('loads component', async () => {
  render(
    <Spacing>
      <p>content</p>
    </Spacing>,
  );
  expect(screen.getByRole('presentation')).toBeTruthy();
  expect(screen.getByText('content')).toBeTruthy();
});

// top
test('margin top xs', async () => {
  render(<Spacing top='xs'>content</Spacing>);
  expect(screen.getByRole('presentation')).toHaveClass(styles['top-xs']);
});

test('margin top sm', async () => {
  render(<Spacing top='sm'>content</Spacing>);
  expect(screen.getByRole('presentation')).toHaveClass(styles['top-sm']);
});

test('margin top md', async () => {
  render(<Spacing top='md'>content</Spacing>);
  expect(screen.getByRole('presentation')).toHaveClass(styles['top-md']);
});

test('margin right lg', async () => {
  render(<Spacing top='lg'>content</Spacing>);
  expect(screen.getByRole('presentation')).toHaveClass(styles['top-lg']);
});

// right
test('margin right xs', async () => {
  render(<Spacing right='xs'>content</Spacing>);
  expect(screen.getByRole('presentation')).toHaveClass(styles['right-xs']);
});

test('margin right sm', async () => {
  render(<Spacing right='sm'>content</Spacing>);
  expect(screen.getByRole('presentation')).toHaveClass(styles['right-sm']);
});

test('margin right md', async () => {
  render(<Spacing right='md'>content</Spacing>);
  expect(screen.getByRole('presentation')).toHaveClass(styles['right-md']);
});

test('margin right lg', async () => {
  render(<Spacing right='lg'>content</Spacing>);
  expect(screen.getByRole('presentation')).toHaveClass(styles['right-lg']);
});

// bottom
test('margin bottom xs', async () => {
  render(<Spacing bottom='xs'>content</Spacing>);
  expect(screen.getByRole('presentation')).toHaveClass(styles['bottom-xs']);
});

test('margin bottom sm', async () => {
  render(<Spacing bottom='sm'>content</Spacing>);
  expect(screen.getByRole('presentation')).toHaveClass(styles['bottom-sm']);
});

test('margin bottom md', async () => {
  render(<Spacing bottom='md'>content</Spacing>);
  expect(screen.getByRole('presentation')).toHaveClass(styles['bottom-md']);
});

test('margin bottom lg', async () => {
  render(<Spacing bottom='lg'>content</Spacing>);
  expect(screen.getByRole('presentation')).toHaveClass(styles['bottom-lg']);
});

// left
test('margin left xs', async () => {
  render(<Spacing left='xs'>content</Spacing>);
  expect(screen.getByRole('presentation')).toHaveClass(styles['left-xs']);
});

test('margin left sm', async () => {
  render(<Spacing left='sm'>content</Spacing>);
  expect(screen.getByRole('presentation')).toHaveClass(styles['left-sm']);
});

test('margin left md', async () => {
  render(<Spacing left='md'>content</Spacing>);
  expect(screen.getByRole('presentation')).toHaveClass(styles['left-md']);
});

test('margin left lg', async () => {
  render(<Spacing left='lg'>content</Spacing>);
  expect(screen.getByRole('presentation')).toHaveClass(styles['left-lg']);
});
