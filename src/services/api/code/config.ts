import { ICodeExecuteDTO, ICodeUpdateDTO } from 'src/interfaces/code/ICode';
import { CodeTextChangeEvent, CodeTextChangeEventIndex } from 'src/types/code';
import { baseConfig } from '..';

export const listConfig = (problemId: number) =>
  baseConfig(true).get(`/codes?problemId=${problemId}`);

export const createConfig = (problemId: number) =>
  baseConfig(true).post(`/codes`, { problemId });

export const updateConfig = (codeId: string, params: ICodeUpdateDTO) =>
  baseConfig(true).patch(`/codes/${codeId}`, params);

export const executeConfig = (codeId: string, params: ICodeExecuteDTO) =>
  baseConfig(true).patch(`/codes/execute/${codeId}`, params);

export const createEventConfig = (
  codeId: string,
  events: CodeTextChangeEvent[]
) => baseConfig(true).post(`/codes/${codeId}/events`, events);

export const createEventIndexConfig = (
  eventId: string,
  index: CodeTextChangeEventIndex
) => baseConfig(true).patch(`/events/${eventId}`, { index });
