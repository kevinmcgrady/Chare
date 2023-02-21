import { NftDTO } from '../models';
import { NftService } from './index';

const expectedResult: NftDTO[] = [];

global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve(expectedResult) }),
) as jest.Mock;

describe('NftService', () => {
  const service = new NftService(null);

  it('should return all NFTs', async () => {
    const actualResult = await service.getAllNfts();
    expect(actualResult).toEqual(expectedResult);
  });

  it('should return one NFT', async () => {
    const actualResult = await service.getOneNft('slug');
    expect(actualResult).toEqual(expectedResult);
  });

  it('should return all NFTs for a creator', async () => {
    const actualResult = await service.getAllNftsForCreator('userId');
    expect(actualResult).toEqual(expectedResult);
  });
});
