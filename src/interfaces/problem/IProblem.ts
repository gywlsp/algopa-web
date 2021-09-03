import { UserProblemInfo } from 'src/types/user';

export interface IProblem {
  id: number;
  level: number;
  link: string;
  title: string;
  categories: string[];
  contentHTML?: string;
}

export type IProblemReadDTO = IProblem & Partial<UserProblemInfo>;
