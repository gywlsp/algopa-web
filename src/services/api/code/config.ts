import {
  ICodeExecuteDTO,
  ICodeSubmitDTO,
  ICodeUpdateDTO,
} from 'src/interfaces/code/ICode';
import { CodeNote, CodeTextChangeEventCreateDTO } from 'src/types/code';
import { baseConfig } from '..';

export const listConfig = (problemId: number) =>
  baseConfig(true).get(`/codes?problemId=${problemId}`);

export const createConfig = (problemId: number) =>
  baseConfig(true).post(`/codes`, { problemId });

export const updateConfig = (codeId: string, params: ICodeUpdateDTO) =>
  baseConfig(true).patch(`/codes/${codeId}`, params);

export const executeConfig = (codeId: string, params: ICodeExecuteDTO) =>
  baseConfig(true).patch(`/codes/execute/${codeId}`, params);

export const submitConfig = (codeId: string, params: ICodeSubmitDTO) =>
  baseConfig(true).patch(`/codes/submit/${codeId}`, params);

export const eventListConfig = (codeId: string) =>
  baseConfig(true).get(`/codes/${codeId}/events`);

export const createEventConfig = (
  codeId: string,
  events: CodeTextChangeEventCreateDTO[]
) => baseConfig(true).post(`/codes/${codeId}/events`, events);

export const createEventIndexConfig = (eventId: string, index: string) =>
  baseConfig(true).patch(`/events/${eventId}`, { index });

export const readNoteConfig = (codeId: string) =>
  baseConfig(true).get(`/codes/${codeId}/notes`);

export const updateNoteConfig = (codeId: string, params: Partial<CodeNote>) =>
  baseConfig(true).patch(`/codes/${codeId}/notes`, params);

export const deleteNoteConfig = (codeId: string) =>
  baseConfig(true).delete(`/codes/${codeId}/notes`);
