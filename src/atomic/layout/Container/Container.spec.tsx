import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import { Container } from './Container.component';

import styles from './Container.module.scss';

test('loads component', async () => {
  render(
    <Container>
      <p>content</p>
    </Container>,
  );
  expect(screen.getByRole('main')).toBeTruthy();
  expect(screen.getByRole('main')).toHaveClass(styles.container);
  expect(screen.getByText('content')).toBeTruthy();
});
