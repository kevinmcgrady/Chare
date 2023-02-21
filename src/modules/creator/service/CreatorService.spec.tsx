import { CreatorDTO } from '../models';
import { CreatorService } from './index';

const expectedResult: CreatorDTO[] = [
  {
    _id: '63bed37a732ff9e2680afe2a',
    image:
      'https://storage.googleapis.com/chare-5cc75.appspot.com/users/Avatar.svg',
    username: 'animakid',
    emailAddress: 'kevinmcgrady47@gmail.com',
  },
];

global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve(expectedResult) }),
) as jest.Mock;

describe('CreatorService', () => {
  const service = new CreatorService(null);

  it('should return all creators', async () => {
    const actualResult = await service.getAllCreators();
    expect(actualResult).toEqual(expectedResult);
  });

  it('should return one creator', async () => {
    const actualResult = await service.getOneCreator('id');
    expect(actualResult).toEqual(expectedResult);
  });
});
