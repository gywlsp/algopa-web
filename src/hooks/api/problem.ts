import { IProblemReadDTO } from 'src/interfaces/problem/IProblem';
import { ProblemListRequestParams } from 'src/types/problem';
import { listConfig } from 'src/services/api/problem/config';
import useRequest from '.';

export const useProblemList = (params?: ProblemListRequestParams) =>
  useRequest<IProblemReadDTO[]>(listConfig(params));
