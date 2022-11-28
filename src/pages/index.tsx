import CreateCollection from '@assets/images/CreateCollection.svg';
import SetUpWallet from '@assets/images/SetUpWallet.svg';
import StartEarning from '@assets/images/StartEarning.svg';
import {
  Card,
  CategoryWidget,
  Collection,
  CreatorWidget,
  HomepageTemplate,
  InfoCard,
  Page,
} from '@atomic';
import React from 'react';

import {
  categories,
  collections,
  creators,
  popularNFTs,
} from '../atomic/Templates/Homepage/data';

export default function Home() {
  const collectionsEls = collections.map((collection, index) => (
    <Collection {...collection} key={index} />
  ));

  const creatorEls = creators.map((creator, index) => (
    <CreatorWidget {...creator} key={index} />
  ));

  const categoriesEls = categories.map((category, index) => (
    <CategoryWidget {...category} key={index} />
  ));

  const popularNFTsEls = popularNFTs.map((item) => (
    <Card {...item} author={item.author} key={item.title} />
  ));

  const howItWorksEls = [
    <InfoCard
      key={'Setup Your wallet'}
      image={{ src: SetUpWallet, alt: 'Setup Wallet' }}
      title='Setup Your wallet'
      description='Set up your wallet of choice. Connect it to the Animarket by
                  clicking the wallet icon in the top right corner.'
    />,
    <InfoCard
      key={'Create Collection'}
      image={{ src: CreateCollection, alt: 'Create Collection' }}
      title='Create Collection'
      description='Upload your work and setup your collection. Add a description,
                social links and floor price.'
    />,
    <InfoCard
      key={'Start Earning'}
      image={{ src: StartEarning, alt: 'Start Earning' }}
      title='Start Earning'
      description='Choose between auctions and fixed-price listings. Start
                earning by selling your NFTs or trading others.'
    />,
  ];

  return (
    <Page>
      <HomepageTemplate
        collections={collectionsEls}
        creators={creatorEls}
        categories={categoriesEls}
        popularNFTs={popularNFTsEls}
        howItWorks={howItWorksEls}
      />
    </Page>
  );
}
