import { useEffect } from 'react';
import { isEqual } from 'lodash';
import { useRecoilState } from 'recoil';

import { IProblemReadDTO } from 'src/interfaces/problem/IProblem';
import { ProblemListRequestParams } from 'src/types/problem';
import {
  readConfig,
  recommendationListConfig,
} from 'src/services/api/problem/config';
import { problem } from 'src/modules/atoms/problem';
import useRequest from '.';

export const useRecommendedProblemList = (params?: ProblemListRequestParams) =>
  useRequest<IProblemReadDTO[]>(recommendationListConfig(params));

export const useProblem = (id: number) => {
  const [problemData, setProblemData] = useRecoilState(problem);
  const { data } = useRequest<IProblemReadDTO>(readConfig(id));

  useEffect(() => {
    if (!isEqual(data, problemData)) {
      setProblemData(data);
    }
  }, [data]);

  return { data };
};
