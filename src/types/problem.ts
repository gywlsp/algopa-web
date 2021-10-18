import { ListRequestParams } from '.';

export type ProblemListRequestParams = {
  type?: ProblemRecommendationType;
  company?: 'kakao' | 'samsung';
  problemId?: number;
} & ListRequestParams;

export type ProblemPageRightSectionType = 'code' | 'history' | 'note';

export type ProblemRecommendationType = 'next' | 'less' | 'wrong';
