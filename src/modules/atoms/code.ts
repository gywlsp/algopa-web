import { atom } from 'recoil';

import { ICodeReadDTO } from 'src/interfaces/code/ICode';

export const problemCodes = atom<ICodeReadDTO[]>({
  key: 'problemCodes',
  default: undefined,
});
