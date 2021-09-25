import { atom } from 'recoil';

import { ICodeReadDTO } from 'src/interfaces/code/ICode';

export const problemCodes = atom<ICodeReadDTO[]>({
  key: 'problemCodes',
  default: undefined,
});

export const selectedProblemCodeId = atom<string>({
  key: 'selectedProblemCodeId',
  default: undefined,
});

export const selectedProblemCodeText = atom<string>({
  key: 'selectedProblemCodeText',
  default: '',
});

