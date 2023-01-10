import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { SectionWithTitleAndDescription } from './SectionWithTitleAndDescription.component';

import styles from './SectionWithTitleAndDescription.module.scss';

test('loads component', async () => {
  render(
    <SectionWithTitleAndDescription title='title' noOfColumns={3} data={[]} />,
  );
  expect(screen.getByRole('main')).toBeTruthy();
  expect(screen.getByTestId('header')).toHaveClass(styles.header);
});

// header class
test('header has correct class', async () => {
  render(
    <SectionWithTitleAndDescription title='title' noOfColumns={3} data={[]} />,
  );
  expect(screen.getByTestId('header')).toHaveClass(styles.header);
});

// title
test('has title', async () => {
  render(
    <SectionWithTitleAndDescription title='title' noOfColumns={3} data={[]} />,
  );
  expect(screen.getByText('title')).toBeTruthy();
});

// description
test('has description', async () => {
  render(
    <SectionWithTitleAndDescription
      title='title'
      description='description'
      noOfColumns={3}
      data={[]}
    />,
  );
  expect(screen.getByText('description')).toBeTruthy();
});

// cta
test('display cta', async () => {
  render(
    <SectionWithTitleAndDescription
      title='title'
      description='description'
      cta={{ text: 'cta', href: 'http://www.example.com' }}
      noOfColumns={3}
      data={[]}
    />,
  );
  expect(screen.getByText('cta'));
});

// data
test('display data', async () => {
  render(
    <SectionWithTitleAndDescription
      title='title'
      description='description'
      cta={{ text: 'cta', href: 'http://www.example.com' }}
      noOfColumns={3}
      data={[<p key='1'>data</p>]}
    />,
  );
  expect(screen.getByText('data'));
});
