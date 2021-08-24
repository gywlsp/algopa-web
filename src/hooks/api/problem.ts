import useRequest from '.';

import { IProblemReadDTO } from 'src/interfaces/problem/IProblem';
import { ProblemListRequestParams } from 'src/types/problem';
import { recommendationListConfig } from 'src/services/api/problem/config';

export const useRecommendedProblemList = (params?: ProblemListRequestParams) =>
  useRequest<IProblemReadDTO[]>(recommendationListConfig(params));
