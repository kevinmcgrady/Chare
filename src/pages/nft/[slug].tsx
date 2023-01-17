import { NFT, NftService } from '@modules/nft';

export async function getServerSideProps(context: any) {
  const nftService = new NftService(context);
  const slug = context.params.slug;

  const nft = await nftService.getOneNft(slug);

  return {
    props: {
      nft,
    },
  };
}

export default NFT;
