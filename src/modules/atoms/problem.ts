import { atom } from 'recoil';

import { IProblemReadDTO } from 'src/interfaces/problem/IProblem';
import { Company, CodeSection } from 'src/types/problem';

export const selectedCompany = atom<Company>({
  key: 'selectedCompany',
  default: undefined,
});

export const problem = atom<IProblemReadDTO>({
  key: 'problem',
  default: undefined,
});

export const CodeSectionType = atom<CodeSection>({
  key: 'CodeSectionType',
  default: 'edit',
});

export const isProblemCategoryShown = atom<boolean>({
  key: 'isCategoryShown',
  default: false,
});
