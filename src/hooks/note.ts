import useRequest from '.';
import { readNoteConfig } from 'src/services/api/code/config';
import { CodeNote } from 'src/types/code';

export const useNote = (codeId: string) =>
  useRequest<CodeNote>(readNoteConfig(codeId));
