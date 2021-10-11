import axios from 'axios';
import { mutate } from 'swr';
import Router from 'next/router';

import {
  createConfig,
  createEventConfig,
  createEventIndexConfig,
  deleteNoteConfig,
  eventListConfig,
  executeConfig,
  listConfig,
  readNoteConfig,
  submitConfig,
  updateConfig,
  updateNoteConfig,
} from './config';
import {
  ICode,
  ICodeExecuteDTO,
  ICodeReadDTO,
  ICodeSubmitDTO,
  ICodeUpdateDTO,
} from 'src/interfaces/code/ICode';
import {
  CodeNote,
  CodeRunOutput,
  CodeSubmitOutput,
  CodeTextChangeEvent,
  CodeTextChangeEventCreateDTO,
} from 'src/types/code';

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
): Promise<CodeRunOutput> =>
  axios(executeConfig(codeId, params)).then((res) => {
    return res.data;
  });

const submit = async (
  codeId: string,
  params: ICodeSubmitDTO
): Promise<CodeSubmitOutput> =>
  axios(submitConfig(codeId, params)).then((res) => {
    return res.data;
  });

const eventList = async (codeId: string): Promise<CodeTextChangeEvent[]> =>
  axios(eventListConfig(codeId)).then((res) => {
    return res.data;
  });

const createEvent = async (
  codeId: string,
  events: CodeTextChangeEventCreateDTO[]
): Promise<{
  lastEventId: string;
  timestamp: Date;
}> =>
  axios(createEventConfig(codeId, events)).then((res) => {
    mutate(JSON.stringify(eventListConfig(codeId)));
    return res.data;
  });

const createEventIndex = async ({
  codeId,
  eventId,
  index,
}: {
  codeId: string;
  eventId: string;
  index: string;
}): Promise<void> =>
  axios(createEventIndexConfig(eventId, index)).then((res) => {
    mutate(JSON.stringify(eventListConfig(codeId)));
    return res.data;
  });

const readNote = async (codeId: string): Promise<CodeNote> =>
  axios(readNoteConfig(codeId)).then((res) => res.data);

const updateNote = async (
  codeId: string,
  params: Partial<CodeNote>
): Promise<void> =>
  axios(updateNoteConfig(codeId, params)).then((res) => {
    mutate(JSON.stringify(readNoteConfig(codeId)));
    return res.data;
  });

const deleteNote = async (codeId: string): Promise<void> =>
  axios(deleteNoteConfig(codeId)).then((res) => {
    mutate(JSON.stringify(readNoteConfig(codeId)));
    return res.data;
  });

const CodeService = {
  list,
  create,
  update,
  execute,
  submit,
  eventList,
  createEvent,
  createEventIndex,
  readNote,
  updateNote,
  deleteNote,
};

export default CodeService;
