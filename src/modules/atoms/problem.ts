import { atom } from 'recoil';

import { IProblemReadDTO } from 'src/interfaces/problem/IProblem';
import { Company, ProblemPageRightSectionType } from 'src/types/problem';

export const selectedCompany = atom<Company>({
  key: 'selectedCompany',
  default: undefined,
});

export const problem = atom<IProblemReadDTO>({
  key: 'problem',
  default: undefined,
});

export const problemPageRightSectionType = atom<ProblemPageRightSectionType>({
  key: 'problemPageRightSectionType',
  default: 'code',
});
