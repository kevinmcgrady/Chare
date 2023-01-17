import ProgressBar from '@badrap/bar-of-progress';
import { Router } from 'next/router';

export const loadPrgressBar = () => {
  const progressBar = new ProgressBar({
    size: 4,
    color: '#a259ff',
    delay: 100,
  });

  Router.events.on('routeChangeStart', progressBar.start);
  Router.events.on('routeChangeComplete', progressBar.finish);
  Router.events.on('routeChangeError', progressBar.finish);
};
