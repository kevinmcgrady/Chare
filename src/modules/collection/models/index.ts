import { CreatorDTO } from '@modules/creator';

export interface CollectionDTO {
  title: string;
  creator: CreatorDTO;
  mainImage: string;
  additionalImages: string[];
}
