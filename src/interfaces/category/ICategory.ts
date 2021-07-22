import { UserCategoryInfo } from 'src/types/user';

export interface ICategory {
  id: number;
  name: string;
}

export type ICategoryReadDTO = ICategory & UserCategoryInfo;
