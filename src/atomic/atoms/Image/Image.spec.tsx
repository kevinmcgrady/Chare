import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { Image } from './Image.component';

import Bear from '@assets/images/bear.png';
import styles from './Image.module.scss';

test('loads component', async () => {
  render(<Image alt='bear' src={Bear} width={20} height={20} />);
  expect(screen.getByRole('img')).toBeTruthy();
});

test('is blurred', async () => {
  render(<Image alt='bear' src={Bear} width={20} height={20} isBlurred />);
  expect(screen.getByRole('img')).toHaveClass(styles.blur);
});

test('has default class when no width or hight', async () => {
  render(<Image alt='bear' src={Bear} />);
  expect(screen.getByRole('img')).toHaveClass(styles.image);
});
