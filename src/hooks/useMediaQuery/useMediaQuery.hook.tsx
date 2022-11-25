import { useMediaQuery as MediaQuery } from 'react-responsive';

export const useMediaQuery = () => {
  const isMobile = MediaQuery({ query: '(max-width: 500px)' });
  const isTablet = MediaQuery({ query: '(max-width: 834px)' });

  return {
    isMobile,
    isTablet,
  };
};
