import { ListRequestParams } from '.';

export type ProblemListRequestParams = {
  type?: 'next' | 'less' | 'wrong';
} & ListRequestParams;
