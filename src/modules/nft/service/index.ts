import { NftDTO } from '../models';

export class NftService {
  static async getAllNfts(): Promise<NftDTO[]> {
    const response = await fetch('http://localhost:3001/nft');
    const nfts = await response.json();

    return nfts;
  }

  static async getOneNft(slug: string): Promise<NftDTO> {
    const response = await fetch(`http://localhost:3001/nft/${slug}`);
    const nft = await response.json();

    return nft;
  }

  static async getAllNftsForCreator(id: string): Promise<NftDTO[]> {
    const response = await fetch(`http://localhost:3001/nft/creator/${id}`);
    const nfts = await response.json();

    return nfts;
  }
}
