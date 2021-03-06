import { atom } from 'recoil';

import { ICodeReadDTO } from 'src/interfaces/code/ICode';
import { CodeTextChangeEvent } from 'src/types/code';

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

export const selectedCodeLastEventId = atom<string>({
  key: 'selectedCodeLastEventId',
  default: undefined,
});

export const codeEvents = atom<CodeTextChangeEvent[]>({
  key: 'codeEvents',
  default: undefined,
});

export const selectedCodeEventId = atom<string>({
  key: 'selectedCodeEventId',
  default: undefined,
});
