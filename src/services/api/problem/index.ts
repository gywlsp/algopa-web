import axios from 'axios';

import { IProblemReadDTO } from 'src/interfaces/problem/IProblem';
import { ProblemListRequestParams } from 'src/types/problem';
import { readConfig, recommendationListConfig } from './config';

const recommendationList = async (
  params: ProblemListRequestParams
): Promise<IProblemReadDTO[]> =>
  axios(recommendationListConfig(params)).then((res) => {
    return res.data;
  });

const read = async (id: number): Promise<IProblemReadDTO> =>
  axios(readConfig(id)).then((res) => {
    return res.data;
  });

const ProblemService = {
  recommendationList,
  read,
};

export default ProblemService;
