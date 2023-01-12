import {
  Card,
  CategoryWidget,
  Collection,
  Container,
  CreatorWidget,
  Featured,
  Hero,
  SectionWithTitleAndDescription,
  Spacing,
} from '@atomic';
import { useMediaQuery } from '@hooks';
import { CategoryDTO } from '@modules/category';
import { CollectionDTO } from '@modules/collection';
import { CreatorDTO } from '@modules/creator';
import { NftDTO } from '@modules/nft';
import { urls } from '@urls';
import React, { ReactElement } from 'react';

type HomepageTemplateProps = {
  collections: CollectionDTO[];
  creators: CreatorDTO[];
  categories: CategoryDTO[];
  popularNFTs: NftDTO[];
  howItWorks: ReactElement[];
  headlineNft: NftDTO;
};

export const HomepageTemplate: React.FC<HomepageTemplateProps> = ({
  collections = [],
  creators = [],
  categories = [],
  popularNFTs = [],
  howItWorks = [],
  headlineNft,
}) => {
  const { isMobile } = useMediaQuery();

  return (
    <React.Fragment>
      <Container>
        <Hero headlineNft={headlineNft} />
        <SectionWithTitleAndDescription
          title='Trending Collection'
          description='Checkout our weekly updated trending collection.'
          data={collections.map((collection) => (
            <Collection
              collection={collection}
              key={collection.title}
              url='test'
            />
          ))}
          noOfColumns={3}
          noOfTabletCols={2}
          noOfMobileCols={1}
        />

        <SectionWithTitleAndDescription
          title='Top creators'
          description='Checkout Top Rated Creators on the NFT Marketplace'
          data={creators.map((creator, index) => (
            <CreatorWidget
              creator={creator}
              index={index}
              key={creator.username}
              url='test'
            />
          ))}
          noOfColumns={4}
          noOfTabletCols={2}
          noOfMobileCols={1}
          cta={{ text: 'View Rankings', href: urls.artist.rankings }}
        />

        <SectionWithTitleAndDescription
          title='Browse Categories'
          data={categories.map((category) => (
            <CategoryWidget category={category} key={category.title} />
          ))}
          noOfColumns={4}
          noOfTabletCols={3}
          noOfMobileCols={2}
        />
        <SectionWithTitleAndDescription
          title='Discover More NFTs'
          description='Explore new trending NFTs'
          data={popularNFTs.map((nft) => (
            <Card
              creator={{
                image: nft.creator.image,
                username: nft.creator.username,
              }}
              image={nft.image}
              title={nft.title}
              highestBid={nft.highestBid}
              price={nft.price}
              key={nft.title}
            />
          ))}
          noOfColumns={3}
          noOfMobileCols={1}
          cta={{ text: 'See All', href: urls.nft.marketplace }}
        />
      </Container>

      <Spacing top={isMobile ? 'sm' : 'lg'} bottom={isMobile ? 'sm' : 'lg'}>
        <Featured url={urls.nft.landing('slug')} />
      </Spacing>

      <Container>
        <SectionWithTitleAndDescription
          title='How it works'
          description='Find out how to get started'
          data={howItWorks}
          noOfColumns={3}
          noOfMobileCols={1}
        />
      </Container>
    </React.Fragment>
  );
};
