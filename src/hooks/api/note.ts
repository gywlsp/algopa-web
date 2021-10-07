import useRequest from '.';
import { readNoteConfig } from 'src/services/api/code/config';
import { CodeNote } from 'src/types/code';
import { VALIDATE_DISABLE_OPTIONS } from 'src/data/swr';

export const useNote = (codeId: string) =>
  useRequest<CodeNote>(readNoteConfig(codeId), VALIDATE_DISABLE_OPTIONS);
