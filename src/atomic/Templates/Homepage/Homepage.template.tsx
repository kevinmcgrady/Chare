import {
  Button,
  Card,
  CardProps,
  CategoryWidget,
  CategoryWidgetProps,
  Collection,
  CollectionProps,
  Container,
  CreatorWidget,
  CreatorWidgetProps,
  Featured,
  Grid,
  Hero,
  Spacing,
  Text,
} from '@atomic';
import React from 'react';

import styles from './Homepage.module.scss';

type HomepageTemplateProps = {
  collections: CollectionProps[];
  creators: CreatorWidgetProps[];
  categories: CategoryWidgetProps[];
  popularNFTs: CardProps[];
};

export const HomepageTemplate: React.FC<HomepageTemplateProps> = ({
  collections = [],
  creators = [],
  categories = [],
  popularNFTs = [],
}) => {
  return (
    <>
      <Container>
        <Hero />
        <Spacing top='lg' bottom='lg'>
          <section>
            <Text variant='h3'>Trending Collection</Text>
            <Spacing bottom='md'>
              <Text variant='subTitle'>
                Checkout our weekly updated trending collection.
              </Text>
            </Spacing>
            <Grid noOfColumns={3}>
              {collections.map((collection, index) => (
                <Collection {...collection} key={index} />
              ))}
            </Grid>
          </section>
        </Spacing>

        <Spacing top='lg' bottom='lg'>
          <section>
            <div className={styles.header}>
              <div>
                <Text variant='h3'>Top creators</Text>
                <Spacing bottom='md'>
                  <Text variant='subTitle'>
                    Checkout Top Rated Creators on the NFT Marketplace
                  </Text>
                </Spacing>
              </div>
              <div>
                <Button variant='secondary'>View Rankings</Button>
              </div>
            </div>
            <Grid noOfColumns={4}>
              {creators.map((creator, index) => (
                <CreatorWidget {...creator} key={index} index={index + 1} />
              ))}
            </Grid>
          </section>
        </Spacing>

        <Spacing top='lg' bottom='lg'>
          <section>
            <Spacing bottom='md'>
              <Text variant='h3'>Browse Categories</Text>
            </Spacing>
            <Grid noOfColumns={4}>
              {categories.map((category, index) => (
                <CategoryWidget {...category} key={index} />
              ))}
            </Grid>
          </section>
        </Spacing>

        <Spacing top='lg' bottom='lg'>
          <section>
            <div className={styles.header}>
              <div>
                <Text variant='h3'>Discover More NFTs</Text>
                <Spacing bottom='md'>
                  <Text variant='subTitle'>Explore new trending NFTs</Text>
                </Spacing>
              </div>
              <div>
                <Button variant='secondary'>See All</Button>
              </div>
            </div>
            <Grid noOfColumns={3}>
              {popularNFTs.map((item) => (
                <Card {...item} author={item.author} key={item.title} />
              ))}
            </Grid>
          </section>
        </Spacing>
      </Container>

      <Spacing bottom='lg' top='lg'>
        <Featured />
      </Spacing>
    </>
  );
};
