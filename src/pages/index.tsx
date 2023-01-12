import { CategoryService } from '@modules/category';
import { CollectionService } from '@modules/collection';
import { Homepage } from '@modules/core';
import { CreatorService } from '@modules/creator';
import { NftService } from '@modules/nft';

export async function getServerSideProps() {
  const nfts = await NftService.getAllNfts();
  const collections = await CollectionService.getAllCollections();
  const creators = await CreatorService.getAllCreators();
  const categories = await CategoryService.getAllCategories();

  return {
    props: {
      nfts,
      collections,
      creators,
      categories,
    },
  };
}

export default Homepage;
