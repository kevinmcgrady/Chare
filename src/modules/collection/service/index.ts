import { getEnviroment } from '@urls';

import { CollectionDTO } from '../models';
export class CollectionService {
  protected context: any;

  constructor(context: any) {
    this.context = context;
  }

  async getAllCollections(): Promise<CollectionDTO[]> {
    const response = await fetch(getEnviroment() + '/collection');
    const collections = await response.json();

    return collections;
  }

  async getAllCollectionsForCreator(id: string): Promise<CollectionDTO[]> {
    const response = await fetch(getEnviroment() + `/collection/creator/${id}`);
    const collections = await response.json();

    return collections;
  }
}
