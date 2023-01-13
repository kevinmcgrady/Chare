import CreateCollection from '@assets/images/CreateCollection.svg';
import SetUpWallet from '@assets/images/SetUpWallet.svg';
import StartEarning from '@assets/images/StartEarning.svg';
import { HomepageTemplate, InfoCard, Page } from '@atomic';
import { CategoryDTO } from '@modules/category';
import { CollectionDTO } from '@modules/collection';
import { CreatorDTO } from '@modules/creator';
import { NftDTO } from '@modules/nft';
import React from 'react';

type HomepageProps = {
  nfts: NftDTO[];
  collections: CollectionDTO[];
  categories: CategoryDTO[];
  creators: CreatorDTO[];
  headlineNft: NftDTO;
};

export const Homepage: React.FC<HomepageProps> = ({
  nfts = [],
  collections = [],
  categories = [],
  creators = [],
  headlineNft,
}) => {
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
        headlineNft={headlineNft}
        collections={collections}
        creators={creators}
        categories={categories}
        popularNFTs={nfts}
        howItWorks={howItWorksEls}
      />
    </Page>
  );
};
