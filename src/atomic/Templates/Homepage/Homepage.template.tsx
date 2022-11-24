import CreateCollection from '@assets/images/CreateCollection.svg';
import SetUpWallet from '@assets/images/SetUpWallet.svg';
import StartEarning from '@assets/images/StartEarning.svg';
import {
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
  Hero,
  InfoCard,
  SectionWithTitleAndDescription,
  Spacing,
} from '@atomic';
import React from 'react';

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
        <SectionWithTitleAndDescription
          title='Trending Collection'
          description='Checkout our weekly updated trending collection.'
          noOfColumns={3}
        >
          {collections.map((collection, index) => (
            <Collection {...collection} key={index} />
          ))}
        </SectionWithTitleAndDescription>

        <SectionWithTitleAndDescription
          title='Top creators'
          description='Checkout Top Rated Creators on the NFT Marketplace'
          noOfColumns={4}
          cta={{ text: 'View Rankings' }}
        >
          {creators.map((creator, index) => (
            <CreatorWidget {...creator} key={index} index={index + 1} />
          ))}
        </SectionWithTitleAndDescription>

        <SectionWithTitleAndDescription
          title='Browse Categories'
          noOfColumns={4}
        >
          {categories.map((category, index) => (
            <CategoryWidget {...category} key={index} />
          ))}
        </SectionWithTitleAndDescription>
        <SectionWithTitleAndDescription
          title='Discover More NFTs'
          description='Explore new trending NFTs'
          noOfColumns={3}
          cta={{ text: 'See All' }}
        >
          {popularNFTs.map((item) => (
            <Card {...item} author={item.author} key={item.title} />
          ))}
        </SectionWithTitleAndDescription>
      </Container>

      <Spacing bottom='lg' top='lg'>
        <Featured />
      </Spacing>

      <Container>
        <SectionWithTitleAndDescription
          title='How it works'
          description='Find out how to get started'
          noOfColumns={3}
        >
          <InfoCard
            image={{ src: SetUpWallet, alt: 'Setup Wallet' }}
            title='Setup Your wallet'
            description='Set up your wallet of choice. Connect it to the Animarket by
                  clicking the wallet icon in the top right corner.'
          />
          <InfoCard
            image={{ src: CreateCollection, alt: 'Create Collection' }}
            title='Create Collection'
            description='Upload your work and setup your collection. Add a description,
                social links and floor price.'
          />
          <InfoCard
            image={{ src: StartEarning, alt: 'Start Earning' }}
            title='Start Earning'
            description='Choose between auctions and fixed-price listings. Start
                earning by selling your NFTs or trading others.'
          />
        </SectionWithTitleAndDescription>
      </Container>
    </>
  );
};
