import { Container, Footer, Header } from '@atomic';
import { useMediaQuery } from '@hooks';
import cn from 'classnames';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { ReactNode } from 'react';

import styles from './Page.module.scss';

type PageProps = {
  children: ReactNode;
  title?: string;
  description?: string;
};

export const Page: React.FC<PageProps> = ({
  children,
  title,
  description = 'NFT',
}) => {
  const { isTablet } = useMediaQuery();
  const { pathname } = useRouter();

  return (
    <div>
      <Head>
        <title>{title ? `Chare - ${title}` : 'Chare'}</title>
        <meta name='description' content={description} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className={cn(isTablet && styles.stickyContainer)}>
        <Container>
          <Header activeLink={pathname} />
        </Container>
      </div>
      {children}
      <Footer />
    </div>
  );
};
