import { CollectionService } from '@modules/collection';
import { Marketplace, NftService } from '@modules/nft';

export async function getServerSideProps() {
  const nfts = await NftService.getAllNfts();
  const collections = await CollectionService.getAllCollections();

  return {
    props: {
      nfts,
      collections,
    },
  };
}

export default Marketplace;
