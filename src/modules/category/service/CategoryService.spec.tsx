import { CategoryDTO } from '../models';
import { CategoryService } from './index';

const expectedResult: CategoryDTO[] = [
  {
    title: 'Art',
    image:
      'https://storage.googleapis.com/chare-5cc75.appspot.com/categories/purpleBackground.png',
    icon: 'https://storage.googleapis.com/chare-5cc75.appspot.com/categories/PaintBrush.svg',
  },
];

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(expectedResult),
  }),
) as jest.Mock;

describe('CategoryService', () => {
  it('should get all categories', async () => {
    const service = new CategoryService(null);
    const actualResult = await service.getAllCategories();
    expect(actualResult).toEqual(expectedResult);
  });
});
