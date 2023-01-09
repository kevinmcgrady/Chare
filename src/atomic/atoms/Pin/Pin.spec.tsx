import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { Pin } from './Pin.component';

import styles from './Pin.module.scss';

test('loads component', async () => {
  render(<Pin number={10} />);
  expect(screen.getByRole('status')).toBeTruthy();
  expect(screen.getByRole('status')).toHaveClass(styles.pin);
});

test('displays text', async () => {
  render(<Pin number={10} />);
  expect(screen.getByRole('status')).toHaveTextContent('10');
});

test('has additional classname', async () => {
  render(<Pin number={10} className='fred' />);
  expect(screen.getByRole('status')).toHaveClass('fred');
});
