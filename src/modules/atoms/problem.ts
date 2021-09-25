import { atom } from 'recoil';
import { IProblemReadDTO } from 'src/interfaces/problem/IProblem';

export const problem = atom<IProblemReadDTO>({
  key: 'problem',
  default: undefined,
});
