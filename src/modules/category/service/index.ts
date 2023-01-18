import { getEnviroment } from '@urls';

import { CategoryDTO } from '../models';

export class CategoryService {
  protected context: any;

  constructor(context: any) {
    this.context = context;
  }

  async getAllCategories(): Promise<CategoryDTO[]> {
    const response = await fetch(getEnviroment() + '/category');
    const categories = await response.json();

    return categories;
  }
}
