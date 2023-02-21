import '@testing-library/jest-dom';

jest.mock('@modules/auth/service', () => {
  return {
    AuthService: { logout: jest.fn() },
  };
});

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => {
    return {
      pathname: '/',
    };
  }),
}));
