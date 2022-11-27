import ConnectWalletImage from '@assets/images/connectWallet.svg';
import { Grid, Image, Page, Spacing, Text } from '@atomic';
import React, { ReactNode } from 'react';

import styles from './CTAPage.module.scss';

type CTAPageProps = {
  pageTitle: string;
  children: ReactNode;
  heading: string;
  subHeading: string;
};

export const CTAPage: React.FC<CTAPageProps> = ({
  pageTitle,
  children,
  heading,
  subHeading,
}) => {
  return (
    <Page title={pageTitle} isFullHeight hideHeader hideFooter>
      <div className={styles.container}>
        <Grid noOfColumns={2} gap='large' noOfMobileCols={1}>
          <div style={{ position: 'relative' }}>
            <Image
              fill
              src={ConnectWalletImage}
              alt='Connect wallet'
              objectFit='cover'
              priority
            />
          </div>
          <div className={styles.content}>
            <Spacing top='sm' bottom='md' right='lg'>
              <Text variant='h2'>{heading}</Text>
              <Spacing top='xs'>
                <Text variant='subTitle'>{subHeading}</Text>
              </Spacing>
              {children}
            </Spacing>
          </div>
        </Grid>
      </div>
    </Page>
  );
};
