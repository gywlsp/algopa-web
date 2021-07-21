import { getQueryString } from 'src/lib/utils';
import { ProblemListRequestParams } from 'src/types/problem';
import { baseConfig } from '..';

export const listConfig = (params: ProblemListRequestParams) =>
  baseConfig(true).get(`/problems/v1/recommendation${getQueryString(params)}`);
