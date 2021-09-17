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
  changes: CodeTextChange[];
  eol: string;
  isFlush: boolean;
  isRedoing: boolean;
  isUndoing: boolean;
  versionId: number;
  modifiedText: string;
  timestamp: Date;
  index?: CodeTextChangeEventIndex;
};

export type CodeTextChangeEventIndex = {
  title: string;
  content: string;
};
