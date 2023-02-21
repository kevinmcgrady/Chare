import { getEnviroment,urls } from './index';

describe('urls', () => {
  it('should return collect nftUrl', () => {
    const expectedResult = '/nft/slug';
    const actualResult = urls.nft.landing('slug');

    expect(expectedResult).toBe(actualResult);
  });

  it('should return correct creator url', () => {
    const expectedResult = '/artist/id';
    const actualResult = urls.artist.profile('id');

    expect(expectedResult).toBe(actualResult);
  });

  it('should get the correct env', () => {
    process.env.NEXT_PUBLIC_SERVICE_URL = 'http://localhost:300';
    const expectedResult = 'http://localhost:300';
    const actualResult = getEnviroment();

    expect(expectedResult).toBe(actualResult);
  });
});
