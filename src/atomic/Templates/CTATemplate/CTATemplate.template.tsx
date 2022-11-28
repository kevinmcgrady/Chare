import ConnectWalletImage from '@assets/images/connectWallet.svg';
import { Grid, Image, Page, Spacing, Text } from '@atomic';
import { useMediaQuery } from '@hooks';
import React, { ReactNode } from 'react';

import styles from './CTATemplate.module.scss';

type CTAPageProps = {
  pageTitle: string;
  children: ReactNode;
  heading: string;
  subHeading: string;
};

export const CTATemplate: React.FC<CTAPageProps> = ({
  pageTitle,
  children,
  heading,
  subHeading,
}) => {
  const { isMobile } = useMediaQuery();
  return (
    <Page title={pageTitle} isFullHeight hideHeader hideFooter>
      <div className={styles.container}>
        <Grid noOfColumns={2} noOfMobileCols={1}>
          <div className={styles.imageContainer}>
            <Image
              fill
              src={ConnectWalletImage}
              alt='Connect wallet'
              objectFit='cover'
              priority
            />
          </div>
          <div className={styles.content}>
            <Spacing
              top='sm'
              bottom='sm'
              right={isMobile ? 'lg' : 'sm'}
              left='sm'
            >
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
