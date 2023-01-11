export class NftService {
  static async getAllNfts() {
    const response = await fetch('http://localhost:3001/nft');
    const nfts = await response.json();
    return nfts;
  }

  static getSingleNft() {}
}
