import axios from 'axios';
import { mutate } from 'swr';

import { createConfig, listConfig } from './config';
import { ICode } from 'src/interfaces/code/ICode';

const list = async (problemId: number): Promise<ICode[]> =>
  axios(listConfig(problemId)).then((res) => {
    return res.data;
  });

export const create = async (problemId: number): Promise<ICode> =>
  axios(createConfig(problemId)).then((res) => {
    mutate(JSON.stringify(listConfig(problemId)));
    return res.data;
  });

const CodeService = { list, create };

export default CodeService;
