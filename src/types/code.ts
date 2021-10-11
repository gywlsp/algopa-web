import { RawDraftContentState } from 'draft-js';

export type CodeLanguage = 'python' | 'javascript';

export type CodeTextRange = {
  endColumn: number;
  endLineNumber: number;
  startColumn: number;
  startLineNumber: number;
};

export type CodeTextChange = {
  range: CodeTextRange;
  text: string;
  rangeLength: number;
  rangeOffset: number;
};

export type CodeRunOutput = { success: boolean; result: string };

export type CodeSubmitOutput = CodeRunOutput & { isSolved: boolean };

export type CodeTextChangeEvent = {
  id: string;
  changes: CodeTextChange[];
  eol: string;
  isFlush: boolean;
  isRedoing: boolean;
  isUndoing: boolean;
  versionId: number;
  modifiedText: string;
  timestamp: Date;
  index?: string;
  order?: number;
};

export type CodeTextChangeEventCreateDTO = Omit<CodeTextChangeEvent, 'id'>;

export type CodeNote = {
  submitted: Note;
  tempSaved: Note;
};

export type Note = {
  title: string;
  content: RawDraftContentState;
};
