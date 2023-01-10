import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MobileNavIcon } from './MobileNavIcon.component';

import styles from './MobileNavIcon.module.scss';

test('loads component', async () => {
  render(<MobileNavIcon onClick={() => null} />);
  expect(screen.getByRole('button')).toBeTruthy();
  expect(screen.getByRole('button')).toHaveClass(styles.mobileNavIcon);
});

test('on click', async () => {
  render(<MobileNavIcon onClick={() => null} />);
  await userEvent.click(screen.getByRole('button'), undefined, {
    clickCount: 1,
  });
});
