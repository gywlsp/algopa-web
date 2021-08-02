import { UserCategoryInfo } from 'src/types/user';

export interface ICategory {
  id: number;
  name: string;
  order: number;
}

export type ICategoryReadDTO = ICategory & UserCategoryInfo;
