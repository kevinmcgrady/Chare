import { NFT, NftService } from '@modules/nft';

export async function getServerSideProps(context: any) {
  const slug = context.params.slug;
  const nft = await NftService.getOneNft(slug);

  return {
    props: {
      nft,
    },
  };
}

export default NFT;
