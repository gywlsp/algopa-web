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

export type RunOutput = { success: boolean; result: string };

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
