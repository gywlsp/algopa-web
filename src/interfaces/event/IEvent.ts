import { CodeTextChange } from 'src/types/code';
import { EventIndex } from 'src/types/event';

export interface IEvent {
  codeId: string[];
  changes: CodeTextChange[];
  eol: string;
  isFlush: boolean;
  isRedoing: boolean;
  isUndoing: boolean;
  versionId: number;
  modifiedText: string;
  timestamp: Date;
  index?: EventIndex;
}
