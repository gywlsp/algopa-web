import axios from 'axios';

import { IProblemReadDTO } from 'src/interfaces/problem/IProblem';
import { ProblemListRequestParams } from 'src/types/problem';
import { listConfig } from './config';

const list = async (
  params: ProblemListRequestParams
): Promise<IProblemReadDTO[]> =>
  axios(listConfig(params)).then((res) => {
    return res.data;
  });

const ProblemService = {
  list,
};

export default ProblemService;
