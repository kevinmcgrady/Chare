import { getEnviroment } from '@urls';

import { CreatorDTO } from '../models';

export class CreatorService {
  protected context: any;

  constructor(context: any) {
    this.context = context;
  }

  async getAllCreators(): Promise<CreatorDTO[]> {
    const response = await fetch(getEnviroment() + '/creator');
    const creators = await response.json();

    return creators;
  }

  async getOneCreator(username: string): Promise<CreatorDTO> {
    const response = await fetch(getEnviroment() + `/creator/${username}`);
    const creator = await response.json();

    return creator;
  }
}
