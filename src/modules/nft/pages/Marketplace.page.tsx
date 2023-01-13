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
import { CollectionDTO } from '@modules/collection';
import React from 'react';

import { NftDTO } from '../models';

type MarketplaceProps = {
  nfts: NftDTO[];
  collections: CollectionDTO[];
};

export const Marketplace: React.FC<MarketplaceProps> = ({
  nfts = [],
  collections = [],
}) => {
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
                {nfts.map((nft) => (
                  <Card
                    url={nft.slug}
                    creator={nft.creator}
                    image={nft.image}
                    title={nft.title}
                    key={nft.title}
                    highestBid={nft.highestBid}
                    price={nft.price}
                  />
                ))}
              </Grid>,
              <Grid
                key='Collections'
                noOfColumns={3}
                noOfTabletColumns={2}
                noOfMobileCols={1}
              >
                {collections.map((collection) => (
                  <Collection collection={collection} key={collection.title} />
                ))}
              </Grid>,
            ]}
          />
        </Spacing>
      </Spacing>
    </Page>
  );
};
