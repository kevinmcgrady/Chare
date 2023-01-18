import { getEnviroment } from '@urls';

import { NftDTO } from '../models';
export class NftService {
  protected context: any;

  constructor(context: any) {
    this.context = context;
  }

  async getAllNfts(): Promise<NftDTO[]> {
    const response = await fetch(getEnviroment() + '/nft');
    const nfts = await response.json();

    return nfts;
  }

  async getOneNft(slug: string): Promise<NftDTO> {
    const response = await fetch(getEnviroment() + `/nft/${slug}`);
    const nft = await response.json();

    return nft;
  }

  async getAllNftsForCreator(id: string): Promise<NftDTO[]> {
    const response = await fetch(getEnviroment() + `/nft/creator/${id}`);
    const nfts = await response.json();

    return nfts;
  }
}
