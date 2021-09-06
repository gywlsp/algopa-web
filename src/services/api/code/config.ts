import { ICodeExecuteDTO, ICodeUpdateDTO } from 'src/interfaces/code/ICode';
import { baseConfig } from '..';

export const listConfig = (problemId: number) =>
  baseConfig(true).get(`/codes?problemId=${problemId}`);

export const createConfig = (problemId: number) =>
  baseConfig(true).post(`/codes`, { problemId });

export const updateConfig = (codeId: string, params: ICodeUpdateDTO) =>
  baseConfig(true).patch(`/codes/${codeId}`, params);

export const executeConfig = (codeId: string, params: ICodeExecuteDTO) =>
  baseConfig(true).patch(`/codes/execute/${codeId}`, params);
