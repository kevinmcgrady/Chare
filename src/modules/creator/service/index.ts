import { getEnviroment } from '@urls';

import { CreatorDTO } from '../models';

export class CreatorService {
  static async getAllCreators(): Promise<CreatorDTO[]> {
    const response = await fetch('http://localhost:3001/creator');
    const creators = await response.json();

    return creators;
  }

  static async getOneCreator(username: string): Promise<CreatorDTO> {
    const response = await fetch(getEnviroment() + `/creator/${username}`);
    const creator = await response.json();

    return creator;
  }
}
