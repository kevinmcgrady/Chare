import { ArtistTemplate } from '@atomic';
import { CollectionDTO } from '@modules/collection';
import { NftDTO } from '@modules/nft';
import React from 'react';

import { CreatorDTO } from '../models';

type ArtistProfileProps = {
  creator: CreatorDTO;
  nfts: NftDTO[];
  collections: CollectionDTO[];
};

export const ArtistProfile: React.FC<ArtistProfileProps> = ({
  creator,
  nfts = [],
  collections = [],
}) => {
  return (
    <ArtistTemplate creator={creator} nfts={nfts} collections={collections} />
  );
};
