import useRequest from '.';

import { IProblemReadDTO } from 'src/interfaces/problem/IProblem';
import { ProblemListRequestParams } from 'src/types/problem';
import {
  readConfig,
  recommendationListConfig,
} from 'src/services/api/problem/config';

export const useRecommendedProblemList = (params?: ProblemListRequestParams) =>
  useRequest<IProblemReadDTO[]>(recommendationListConfig(params));

export const useProblem = (id: number) =>
  useRequest<IProblemReadDTO>(readConfig(id));
