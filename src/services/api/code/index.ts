import axios from 'axios';
import { mutate } from 'swr';
import Router from 'next/router';

import { createConfig, listConfig, updateConfig } from './config';
import { ICode, ICodeUpdateDTO } from 'src/interfaces/code/ICode';

const list = async (problemId: number): Promise<ICode[]> =>
  axios(listConfig(problemId)).then((res) => {
    return res.data;
  });

export const create = async (problemId: number): Promise<ICode> =>
  axios(createConfig(problemId)).then((res) => {
    mutate(JSON.stringify(listConfig(problemId)));
    return res.data;
  });

export const update = async (
  codeId: string,
  params: ICodeUpdateDTO
): Promise<ICode> =>
  axios(updateConfig(codeId, params)).then((res) => {
    mutate(JSON.stringify(listConfig(Number(Router.query.id))));
    return res.data;
  });

const CodeService = { list, create, update };

export default CodeService;
