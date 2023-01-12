import { CreatorDTO } from '../models';

export class CreatorService {
  static async getAllCreators(): Promise<CreatorDTO[]> {
    const response = await fetch('http://localhost:3001/creator');
    const creators = await response.json();

    return creators;
  }
}
