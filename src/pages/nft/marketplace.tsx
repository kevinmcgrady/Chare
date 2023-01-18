import { CollectionService } from '@modules/collection';
import { Marketplace, NftService } from '@modules/nft';

export async function getServerSideProps(context: any) {
  const nftService = new NftService(context);
  const collectionService = new CollectionService(context);

  const nfts = await nftService.getAllNfts();
  const collections = await collectionService.getAllCollections();

  return {
    props: {
      nfts,
      collections,
    },
  };
}

export default Marketplace;
