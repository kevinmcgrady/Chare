import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { Link } from './Link.component';

import styles from './Link.module.scss';

test('loads component', async () => {
  render(<Link href='http://www.example.com'>link</Link>);

  expect(screen.getByRole('link')).toBeInTheDocument();
  expect(screen.getByRole('link')).toHaveClass(styles.link);
});

test('is active', async () => {
  render(
    <Link isActive href='http://www.example.com'>
      link
    </Link>,
  );

  expect(screen.getByRole('link')).toHaveClass(styles.isActive);
});
