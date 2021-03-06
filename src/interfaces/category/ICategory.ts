import { UserCategoryInfo } from 'src/types/user';

export interface ICategory {
  id: number;
  name: string;
  order: number;
  problemCount: number;
}

export type ICategoryReadDTO = ICategory & Partial<UserCategoryInfo>;
