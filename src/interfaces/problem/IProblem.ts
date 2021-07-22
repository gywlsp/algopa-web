import { UserProblemInfo } from 'src/types/user';

export interface IProblem {
  id: number;
  number: number;
  levelImgLink: string;
  link: string;
  title: string;
}

export type IProblemReadDTO = IProblem & UserProblemInfo;
