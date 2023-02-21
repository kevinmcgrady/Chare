import { formatDate } from './date';

describe('formatDate', () => {
  it('should correctly format date', () => {
    const expectedResult = '13 June 2023';
    const actualResult = formatDate(new Date('2023-06-13T12:17:40.373Z'));
    expect(actualResult).toEqual(expectedResult);
  });
});
