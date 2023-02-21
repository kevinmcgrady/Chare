import { CollectionDTO } from '../models/index';
import { CollectionService } from './index';

const expectedResult: CollectionDTO[] = [
  {
    title: 'DSGN Animals',
    creator: {
      _id: '63bed37a732ff9e2680afe2a',
      image:
        'https://storage.googleapis.com/chare-5cc75.appspot.com/users/Avatar.svg',
      username: 'animakid',
      emailAddress: 'kevinmcgrady47@gmail.com',
    },
    mainImage:
      'https://storage.googleapis.com/chare-5cc75.appspot.com/collections/dog.png',
    additionalImages: [
      'https://storage.googleapis.com/chare-5cc75.appspot.com/collections/bear.png',
      'https://storage.googleapis.com/chare-5cc75.appspot.com/collections/rabit.png',
    ],
  },
];

global.fetch = jest.fn(() =>
  Promise.resolve({ json: () => Promise.resolve(expectedResult) }),
) as jest.Mock;

describe('CollectionService', () => {
  it('should return all collections', async () => {
    const actualResult = await new CollectionService(null).getAllCollections();
    expect(actualResult).toEqual(expectedResult);
  });

  it('should return one collection', async () => {
    const actualResult = await new CollectionService(
      null,
    ).getAllCollectionsForCreator('id');
    expect(actualResult).toEqual(expectedResult);
  });
});
