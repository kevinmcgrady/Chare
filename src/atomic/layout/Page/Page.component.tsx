import { Container, Footer, Header, Spacing } from '@atomic';
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
  isFullHeight?: boolean;
  hideHeader?: boolean;
  hideFooter?: boolean;
  absoluteHeader?: boolean;
};

export const Page: React.FC<PageProps> = ({
  children,
  title,
  description = 'NFT',
  isFullHeight = false,
  hideHeader = false,
  hideFooter = false,
  absoluteHeader = false,
}) => {
  const { isTablet } = useMediaQuery();
  const { pathname } = useRouter();

  return (
    <div className={cn(isFullHeight && styles.pageFullHeight)}>
      <Head>
        <title>{title ? `Chare - ${title}` : 'Chare'}</title>
        <meta name='description' content={description} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {!hideHeader && (
        <div
          className={cn(
            isTablet && styles.stickyContainer,
            absoluteHeader && !isTablet && styles.absoluteHeader,
          )}
        >
          {!absoluteHeader && !isTablet && <Spacing top='md' />}
          <Container>
            <Header activeLink={pathname} />
          </Container>
        </div>
      )}

      <div className={cn(isFullHeight && styles.grow)}>{children}</div>
      {!hideFooter && <Footer />}
    </div>
  );
};
