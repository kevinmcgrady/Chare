import { getEnviroment } from '@urls';

import { CategoryDTO } from '../models';

export class CategoryService {
  static async getAllCategories(): Promise<CategoryDTO[]> {
    const response = await fetch(getEnviroment() + '/category');
    const categories = await response.json();

    return categories;
  }
}
