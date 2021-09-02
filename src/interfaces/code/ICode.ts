import { CodeLanguage } from 'src/types/code';

export interface ICode {
  id: string;
  text: string;
  language: CodeLanguage;
  problemId: number;
  tryCount: number;
}
