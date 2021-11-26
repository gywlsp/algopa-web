import { ListRequestParams } from '.';

export type ProblemListRequestParams = {
  type?: ProblemRecommendationType;
  company?: Company;
  problemId?: number;
} & ListRequestParams;

export type CodeSection = 'edit' | 'history' | 'note';

export type ProblemRecommendationType = 'next' | 'less' | 'wrong';

export type Company = 'kakao' | 'samsung';
