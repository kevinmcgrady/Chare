import { Container, Footer,Header } from '@atomic';
import Head from 'next/head';
import React, { ReactNode } from 'react';

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
  return (
    <div>
      <Head>
        <title>{title ? `Chare - ${title}` : 'Chare'}</title>
        <meta name='description' content={description} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Container>
        <Header />
      </Container>
      {children}
      <Footer />
    </div>
  );
};
