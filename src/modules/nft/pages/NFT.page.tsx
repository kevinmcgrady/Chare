import { NFTTemplate } from '@atomic';
import React from 'react';

import { NftDTO } from '../models';

type NftProps = {
  nft: NftDTO;
};

export const NFT: React.FC<NftProps> = ({ nft }) => {
  return <NFTTemplate nft={nft} />;
};
