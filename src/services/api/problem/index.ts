import axios from 'axios';

import { IProblemReadDTO } from 'src/interfaces/problem/IProblem';
import { ProblemListRequestParams } from 'src/types/problem';
import { recommendationListConfig } from './config';

const recommendationList = async (
  params: ProblemListRequestParams
): Promise<IProblemReadDTO[]> =>
  axios(recommendationListConfig(params)).then((res) => {
    return res.data;
  });

const ProblemService = {
  recommendationList,
};

export default ProblemService;
