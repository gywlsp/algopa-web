import { CodeLanguage } from 'src/types/code';

export interface ICode {
  id: string;
  text: string;
  language: CodeLanguage;
  problemId: number;
  tryCount: number;
}

export type ICodeReadDTO = ICode & { lastEventId: string };

export type ICodeUpdateDTO = Partial<Pick<ICode, 'text' | 'language'>>;

export type ICodeExecuteDTO = Pick<ICode, 'text'> & { input: string };
