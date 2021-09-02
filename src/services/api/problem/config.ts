import { getQueryString } from 'src/lib/utils';
import { ProblemListRequestParams } from 'src/types/problem';
import { baseConfig } from '..';

export const recommendationListConfig = (params: ProblemListRequestParams) =>
  baseConfig(true).get(`/problems/recommendation${getQueryString(params)}`);

export const readConfig = (id: number) =>
  baseConfig().get(`/problems/info/${id}`);
