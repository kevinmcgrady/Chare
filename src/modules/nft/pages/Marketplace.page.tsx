import {
  Card,
  Collection,
  Container,
  Grid,
  Page,
  SearchBar,
  Spacing,
  TabBar,
  Text,
} from '@atomic';
import React from 'react';

import {
  collections,
  popularNFTs,
} from '../../../atomic/Templates/Homepage/data';

export const Marketplace: React.FC = () => {
  return (
    <Page title='Marketplace'>
      <Spacing top='md' bottom='md'>
        <Container>
          <Text variant='h3'>Browse Marketplace</Text>
          <Spacing bottom='md'>
            <Text variant='subTitle'>
              Browse through more than 50k NFTs on the NFT Marketplace.
            </Text>
          </Spacing>
          <Spacing bottom='md'>
            <SearchBar />
          </Spacing>
        </Container>
        <Spacing bottom='md'>
          <TabBar
            headings={['NFTs', 'Collections']}
            tabs={[
              <Grid
                key='NFTs'
                noOfColumns={3}
                noOfTabletColumns={2}
                noOfMobileCols={1}
              >
                {popularNFTs.map((nft) => (
                  <Card {...nft} key={nft.title} />
                ))}
              </Grid>,
              <Grid
                key='Collections'
                noOfColumns={3}
                noOfTabletColumns={2}
                noOfMobileCols={1}
              >
                {collections.map((collection) => (
                  <Collection {...collection} key={collection.title} />
                ))}
              </Grid>,
            ]}
          />
        </Spacing>
      </Spacing>
    </Page>
  );
};
