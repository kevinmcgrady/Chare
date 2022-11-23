import React from 'react';
import styles from './Footer.module.scss';
import { Container, Text, Grid, Spacing } from '@atomic';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Grid noOfColumns={3}>
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
              <Text>Marketplace</Text>
            </Spacing>
            <Spacing top='xs'>
              <Text>Rankings</Text>
            </Spacing>
            <Spacing top='xs'>
              <Text>Connect a wallet</Text>
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
