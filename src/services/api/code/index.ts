import axios from 'axios';
import { mutate } from 'swr';
import Router from 'next/router';

import {
  createConfig,
  executeConfig,
  listConfig,
  updateConfig,
} from './config';
import {
  ICode,
  ICodeExecuteDTO,
  ICodeReadDTO,
  ICodeUpdateDTO,
} from 'src/interfaces/code/ICode';

const list = async (problemId: number): Promise<ICodeReadDTO[]> =>
  axios(listConfig(problemId)).then((res) => {
    return res.data;
  });

const create = async (problemId: number): Promise<ICode> =>
  axios(createConfig(problemId)).then((res) => {
    mutate(JSON.stringify(listConfig(problemId)));
    return res.data;
  });

const update = async (codeId: string, params: ICodeUpdateDTO): Promise<ICode> =>
  axios(updateConfig(codeId, params)).then((res) => {
    mutate(JSON.stringify(listConfig(Number(Router.query.id))));
    return res.data;
  });

const execute = async (
  codeId: string,
  params: ICodeExecuteDTO
): Promise<{ success: boolean; result: string }> =>
  axios(executeConfig(codeId, params)).then((res) => {
    return res.data;
  });

const CodeService = { list, create, update, execute };

export default CodeService;
