import { CollectionDTO } from '../models';

export class CollectionService {
  static async getAllCollections(): Promise<CollectionDTO[]> {
    const response = await fetch('http://localhost:3001/collection');
    const collections = await response.json();

    return collections;
  }

  static async getAllCollectionsForCreator(
    id: string,
  ): Promise<CollectionDTO[]> {
    const response = await fetch(
      `http://localhost:3001/collection/creator/${id}`,
    );
    const collections = await response.json();

    return collections;
  }
}
