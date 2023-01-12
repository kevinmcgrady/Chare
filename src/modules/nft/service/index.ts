import { NftDTO } from '../models';

export class NftService {
  static async getAllNfts(): Promise<NftDTO[]> {
    const response = await fetch('http://localhost:3001/nft');
    const nfts = await response.json();

    return nfts;
  }
}
