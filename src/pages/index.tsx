import { CategoryService } from '@modules/category';
import { CollectionService } from '@modules/collection';
import { Homepage } from '@modules/core';
import { CreatorService } from '@modules/creator';
import { NftService } from '@modules/nft';

export async function getStaticProps(context: any) {
  const nftService = new NftService(context);
  const collectionService = new CollectionService(context);
  const categoryService = new CategoryService(context);
  const creatorService = new CreatorService(context);

  const nfts = await nftService.getAllNfts();
  const collections = await collectionService.getAllCollections();
  const creators = await creatorService.getAllCreators();
  const categories = await categoryService.getAllCategories();
  const headlineNft = await nftService.getOneNft('space-walking');
  const featuredNft = await nftService.getOneNft('space-walking');

  return {
    props: {
      nfts,
      collections,
      creators,
      categories,
      headlineNft,
      featuredNft,
    },
  };
}

export default Homepage;
