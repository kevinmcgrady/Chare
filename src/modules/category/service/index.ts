import { CategoryDTO } from '../models';

export class CategoryService {
  static async getAllCategories(): Promise<CategoryDTO[]> {
    const response = await fetch('http://localhost:3001/category');
    const categories = await response.json();

    return categories;
  }
}
