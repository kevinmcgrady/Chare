import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { Text } from './Text.component';

import styles from './Text.module.scss';

test('loads component', async () => {
  render(<Text>Welcome</Text>);
  expect(screen.getByText('Welcome')).toBeTruthy();
});

// Varients
test('h1', async () => {
  render(<Text variant='h1'>Welcome</Text>);
  expect(screen.getByRole('heading', { level: 1 }));
  expect(screen.getByRole('heading')).toHaveClass(styles.h1);
});

test('h2', async () => {
  render(<Text variant='h2'>Welcome</Text>);
  expect(screen.getByRole('heading', { level: 2 }));
  expect(screen.getByRole('heading')).toHaveClass(styles.h2);
});

test('h3', async () => {
  render(<Text variant='h3'>Welcome</Text>);
  expect(screen.getByRole('heading', { level: 3 }));
  expect(screen.getByRole('heading')).toHaveClass(styles.h3);
});

test('h4', async () => {
  render(<Text variant='h4'>Welcome</Text>);
  expect(screen.getByRole('heading', { level: 4 }));
  expect(screen.getByRole('heading')).toHaveClass(styles.h4);
});

test('h5', async () => {
  render(<Text variant='h5'>Welcome</Text>);
  expect(screen.getByRole('heading', { level: 5 }));
  expect(screen.getByRole('heading')).toHaveClass(styles.h5);
});

test('subtitle', async () => {
  render(<Text variant='subTitle'>Welcome</Text>);
  expect(screen.getByRole('heading', { level: 2 }));
  expect(screen.getByRole('heading')).toHaveClass(styles.subTitle);
});

test('body', async () => {
  render(<Text variant='body'>Welcome</Text>);
  expect(screen.getByText('Welcome')).toHaveClass(styles.body);
});

test('caption', async () => {
  render(<Text variant='caption'>Welcome</Text>);
  expect(screen.getByText('Welcome')).toHaveClass(styles.caption);
});

// fonts
test('secondary font', async () => {
  render(
    <Text variant='h1' font='spaceMono'>
      Welcome
    </Text>,
  );
  expect(screen.getByRole('heading')).toHaveClass(styles.secondaryFont);
});

// colors
test('is black', async () => {
  render(
    <Text variant='h1' color='black'>
      Welcome
    </Text>,
  );
  expect(screen.getByRole('heading')).toHaveClass(styles.black);
});

test('is default', async () => {
  render(
    <Text variant='h1' color='default'>
      Welcome
    </Text>,
  );
  expect(screen.getByRole('heading')).toHaveClass(styles.default);
});

test('is gray', async () => {
  render(
    <Text variant='h1' color='gray'>
      Welcome
    </Text>,
  );
  expect(screen.getByRole('heading')).toHaveClass(styles.gray);
});

test('is green', async () => {
  render(
    <Text variant='h1' color='green'>
      Welcome
    </Text>,
  );
  expect(screen.getByRole('heading')).toHaveClass(styles.green);
});

// alignment
test('is left', async () => {
  render(
    <Text variant='h1' align='left'>
      Welcome
    </Text>,
  );
  expect(screen.getByRole('heading')).toHaveClass(styles.left);
});

test('is center', async () => {
  render(
    <Text variant='h1' align='center'>
      Welcome
    </Text>,
  );
  expect(screen.getByRole('heading')).toHaveClass(styles.center);
});

test('is right', async () => {
  render(
    <Text variant='h1' align='right'>
      Welcome
    </Text>,
  );
  expect(screen.getByRole('heading')).toHaveClass(styles.right);
});

//classname
test('has additional classname', async () => {
  render(
    <Text variant='h1' className='fred'>
      Welcome
    </Text>,
  );
  expect(screen.getByRole('heading')).toHaveClass('fred');
});
