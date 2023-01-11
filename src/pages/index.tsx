import { Homepage } from '@modules/core';
import { NftService } from '@services/nft';

export async function getServerSideProps() {
  const nfts = await NftService.getAllNfts();

  return {
    props: {
      nfts,
    },
  };
}

export default Homepage;
