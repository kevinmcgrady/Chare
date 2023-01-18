import { CollectionService } from '@modules/collection';
import { ArtistProfile, CreatorService } from '@modules/creator';
import { NftService } from '@modules/nft';

export async function getServerSideProps(context: any) {
  const creatorService = new CreatorService(context);
  const nftService = new NftService(context);
  const collectionService = new CollectionService(context);

  const username = context.params.username;
  const creator = await creatorService.getOneCreator(username);
  const nfts = await nftService.getAllNftsForCreator(creator._id);
  const collections = await collectionService.getAllCollectionsForCreator(
    creator._id,
  );

  return {
    props: {
      nfts,
      collections,
      creator,
    },
  };
}

export default ArtistProfile;
