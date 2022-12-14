import { Container, Grid, Link, Spacing, Text } from '@atomic';
import { urls } from '@urls';
import React from 'react';

import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Grid noOfColumns={3} noOfMobileCols={1} className={styles.grid}>
          <div>
            <Text variant='h5' font='spaceMono'>
              Chare
            </Text>
            <Spacing top='xs'>
              <Text>NFT marketplace UI created with Anima for Figma.</Text>
            </Spacing>
            <Spacing top='xs'>
              <Text>Join our community</Text>
            </Spacing>
          </div>
          <div>
            <Text variant='h5' font='spaceMono'>
              Explore
            </Text>
            <Spacing top='xs'>
              <Link href={urls.nft.marketplace}>Marketplace</Link>
            </Spacing>
            <Spacing top='xs'>
              <Link href={urls.artist.rankings}>Rankings</Link>
            </Spacing>
            <Spacing top='xs'>
              <Link href={urls.auth.connectWallet}>Connect a wallet</Link>
            </Spacing>
          </div>
          <div>
            <Text variant='h5' font='spaceMono'>
              Join our weekly digest
            </Text>
            <Spacing top='xs'>
              <Text>
                Get exclusive promotions & updates straight to your inbox.
              </Text>
            </Spacing>
          </div>
        </Grid>
      </Container>
    </footer>
  );
};
