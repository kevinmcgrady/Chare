import { CollectionService } from '@modules/collection';
import { ArtistProfile, CreatorService } from '@modules/creator';
import { NftService } from '@modules/nft';

export async function getServerSideProps(context: any) {
  const username = context.params.username;
  const creator = await CreatorService.getOneCreator(username);
  const nfts = await NftService.getAllNftsForCreator(creator._id);
  const collections = await CollectionService.getAllCollectionsForCreator(
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
