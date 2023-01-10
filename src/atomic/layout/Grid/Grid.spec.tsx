import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { Grid } from './Grid.component';

import styles from './Grid.module.scss';

test('loads component', async () => {
  render(
    <Grid noOfColumns={3}>
      <p>content</p>
    </Grid>,
  );
  expect(screen.getByRole('grid')).toBeTruthy();
  expect(screen.getByRole('grid')).toHaveClass(styles.grid);
  expect(screen.getByText('content')).toBeTruthy();
});

// columns
test('1 column', async () => {
  render(<Grid noOfColumns={1}>content</Grid>);
  expect(screen.getByRole('grid')).toHaveClass(styles['col-1']);
});

test('2 columns', async () => {
  render(<Grid noOfColumns={2}>content</Grid>);
  expect(screen.getByRole('grid')).toHaveClass(styles['col-2']);
});

test('3 columns', async () => {
  render(<Grid noOfColumns={3}>content</Grid>);
  expect(screen.getByRole('grid')).toHaveClass(styles['col-3']);
});

test('4 columns', async () => {
  render(<Grid noOfColumns={4}>content</Grid>);
  expect(screen.getByRole('grid')).toHaveClass(styles['col-4']);
});

test('5 columns', async () => {
  render(<Grid noOfColumns={5}>content</Grid>);
  expect(screen.getByRole('grid')).toHaveClass(styles['col-5']);
});

// mobile columns
test('1 column', async () => {
  render(
    <Grid noOfColumns={1} noOfMobileCols={1}>
      content
    </Grid>,
  );
  expect(screen.getByRole('grid')).toHaveClass(styles['col-1']);
  expect(screen.getByRole('grid')).toHaveClass(styles['col-mobile-1']);
});

test('2 columns', async () => {
  render(
    <Grid noOfColumns={2} noOfMobileCols={2}>
      content
    </Grid>,
  );
  expect(screen.getByRole('grid')).toHaveClass(styles['col-2']);
  expect(screen.getByRole('grid')).toHaveClass(styles['col-mobile-2']);
});

test('3 columns', async () => {
  render(
    <Grid noOfColumns={3} noOfMobileCols={3}>
      content
    </Grid>,
  );
  expect(screen.getByRole('grid')).toHaveClass(styles['col-3']);
  expect(screen.getByRole('grid')).toHaveClass(styles['col-mobile-3']);
});

test('4 columns', async () => {
  render(
    <Grid noOfColumns={4} noOfMobileCols={4}>
      content
    </Grid>,
  );
  expect(screen.getByRole('grid')).toHaveClass(styles['col-4']);
  expect(screen.getByRole('grid')).toHaveClass(styles['col-mobile-4']);
});

test('5 columns', async () => {
  render(
    <Grid noOfColumns={5} noOfMobileCols={5}>
      content
    </Grid>,
  );
  expect(screen.getByRole('grid')).toHaveClass(styles['col-5']);
  expect(screen.getByRole('grid')).toHaveClass(styles['col-mobile-5']);
});

// tablet columns
test('1 column', async () => {
  render(
    <Grid noOfColumns={1} noOfMobileCols={1} noOfTabletColumns={1}>
      content
    </Grid>,
  );
  expect(screen.getByRole('grid')).toHaveClass(styles['col-1']);
  expect(screen.getByRole('grid')).toHaveClass(styles['col-mobile-1']);
  expect(screen.getByRole('grid')).toHaveClass(styles['col-tablet-1']);
});

test('2 columns', async () => {
  render(
    <Grid noOfColumns={2} noOfMobileCols={2} noOfTabletColumns={2}>
      content
    </Grid>,
  );
  expect(screen.getByRole('grid')).toHaveClass(styles['col-2']);
  expect(screen.getByRole('grid')).toHaveClass(styles['col-mobile-2']);
  expect(screen.getByRole('grid')).toHaveClass(styles['col-tablet-2']);
});

test('3 columns', async () => {
  render(
    <Grid noOfColumns={3} noOfMobileCols={3} noOfTabletColumns={3}>
      content
    </Grid>,
  );
  expect(screen.getByRole('grid')).toHaveClass(styles['col-3']);
  expect(screen.getByRole('grid')).toHaveClass(styles['col-mobile-3']);
  expect(screen.getByRole('grid')).toHaveClass(styles['col-tablet-3']);
});

test('4 columns', async () => {
  render(
    <Grid noOfColumns={4} noOfMobileCols={4} noOfTabletColumns={4}>
      content
    </Grid>,
  );
  expect(screen.getByRole('grid')).toHaveClass(styles['col-4']);
  expect(screen.getByRole('grid')).toHaveClass(styles['col-mobile-4']);
  expect(screen.getByRole('grid')).toHaveClass(styles['col-tablet-4']);
});

test('5 columns', async () => {
  render(
    <Grid noOfColumns={5} noOfMobileCols={5} noOfTabletColumns={5}>
      content
    </Grid>,
  );
  expect(screen.getByRole('grid')).toHaveClass(styles['col-5']);
  expect(screen.getByRole('grid')).toHaveClass(styles['col-mobile-5']);
  expect(screen.getByRole('grid')).toHaveClass(styles['col-tablet-5']);
});

// gap
test('has default (small) gap', async () => {
  render(<Grid noOfColumns={5}>content</Grid>);
  expect(screen.getByRole('grid')).toHaveClass(styles.small);
});

test('has large gap', async () => {
  render(
    <Grid noOfColumns={5} gap='large'>
      content
    </Grid>,
  );
  expect(screen.getByRole('grid')).toHaveClass(styles.large);
});

// className
test('has additional classname', async () => {
  render(
    <Grid noOfColumns={5} className='fred'>
      content
    </Grid>,
  );
  expect(screen.getByRole('grid')).toHaveClass('fred');
});
