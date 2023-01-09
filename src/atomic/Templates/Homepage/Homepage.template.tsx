import {
  Container,
  Featured,
  Hero,
  SectionWithTitleAndDescription,
  Spacing,
} from '@atomic';
import { useMediaQuery } from '@hooks';
import { urls } from '@urls';
import React, { ReactElement } from 'react';

type HomepageTemplateProps = {
  collections: ReactElement[];
  creators: ReactElement[];
  categories: ReactElement[];
  popularNFTs: ReactElement[];
  howItWorks: ReactElement[];
};

export const HomepageTemplate: React.FC<HomepageTemplateProps> = ({
  collections = [],
  creators = [],
  categories = [],
  popularNFTs = [],
  howItWorks = [],
}) => {
  const { isMobile } = useMediaQuery();

  return (
    <React.Fragment>
      <Container>
        <Hero />
        <SectionWithTitleAndDescription
          title='Trending Collection'
          description='Checkout our weekly updated trending collection.'
          data={collections}
          noOfColumns={3}
          noOfTabletCols={2}
          noOfMobileCols={1}
        />

        <SectionWithTitleAndDescription
          title='Top creators'
          description='Checkout Top Rated Creators on the NFT Marketplace'
          data={creators}
          noOfColumns={4}
          noOfTabletCols={2}
          noOfMobileCols={1}
          cta={{ text: 'View Rankings', href: urls.artist.rankings }}
        />

        <SectionWithTitleAndDescription
          title='Browse Categories'
          data={categories}
          noOfColumns={4}
          noOfTabletCols={3}
          noOfMobileCols={2}
        />
        <SectionWithTitleAndDescription
          title='Discover More NFTs'
          description='Explore new trending NFTs'
          data={popularNFTs}
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
