import ArtistHeaderImage from '@assets/images/connectWallet.svg';
import {
  Button,
  Card,
  Collection,
  Container,
  Grid,
  Image,
  Page,
  Spacing,
  Stats,
  TabBar,
  Text,
} from '@atomic';
import { CollectionDTO } from '@modules/collection';
import { CreatorDTO } from '@modules/creator';
import { NftDTO } from '@modules/nft';
import React from 'react';

import styles from './ArtistTemplate.module.scss';

type ArtistTemplateProps = {
  creator: CreatorDTO;
  nfts: NftDTO[];
  collections: CollectionDTO[];
};

export const ArtistTemplate: React.FC<ArtistTemplateProps> = ({
  creator,
  collections = [],
  nfts = [],
}) => {
  return (
    <Page title='Artist' absoluteHeader>
      <Spacing bottom='md'>
        <div>
          <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              fill
              src={ArtistHeaderImage}
              alt='Artist'
            />
          </div>
          <div className={styles.avatarContainer}>
            <Container>
              <Image
                src={creator.image}
                alt='Avatar'
                width={120}
                height={120}
              />
              <Spacing top='md'>
                <Grid noOfColumns={2} noOfMobileCols={1}>
                  <div>
                    <Text variant='h2'>{creator.username}</Text>
                    <Spacing top='xs' bottom='xs'>
                      <Stats />
                    </Spacing>
                    <Text font='spaceMono' variant='h5' color='gray'>
                      Bio
                    </Text>
                    <Spacing top='xs' bottom='xs'>
                      <Text>
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Nihil corporis et id tempora debitis quaerat quia
                        nam dolorum veritatis, quidem voluptatem reiciendis.
                        Corrupti commodi eaque accusantium, provident cupiditate
                        praesentium perferendis!
                      </Text>
                    </Spacing>
                    <Text font='spaceMono' variant='h5' color='gray'>
                      Links
                    </Text>
                  </div>
                  <div className={styles.ctaContainer}>
                    <Spacing right='xs'>
                      <Button>0xc0E3...B79C</Button>
                    </Spacing>
                    <Button variant='secondary'>Follow</Button>
                  </div>
                </Grid>
              </Spacing>
            </Container>
            <Spacing top='md'>
              <TabBar
                headings={['Created', 'Ownded', 'Collections']}
                tabs={[
                  <Grid
                    key='Created'
                    noOfColumns={3}
                    noOfTabletColumns={2}
                    noOfMobileCols={1}
                  >
                    {nfts.map((nft) => (
                      <Card
                        creator={nft.creator}
                        image={nft.image}
                        title={nft.title}
                        key={nft.title}
                      />
                    ))}
                  </Grid>,
                  <Grid
                    key='Owned'
                    noOfColumns={3}
                    noOfTabletColumns={2}
                    noOfMobileCols={1}
                  >
                    {nfts.map((nft) => (
                      <Card
                        creator={nft.creator}
                        image={nft.image}
                        title={nft.title}
                        key={nft.title}
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
                      <Collection
                        collection={collection}
                        url='http://example.com'
                        key={collection.title}
                      />
                    ))}
                  </Grid>,
                ]}
              />
            </Spacing>
          </div>
        </div>
      </Spacing>
    </Page>
  );
};
