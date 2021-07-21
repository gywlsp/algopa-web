import { atom } from 'recoil';

import { IUser } from 'src/interfaces/user/IUser';

export const userState = atom<IUser>({
  key: 'userState',
  default: undefined,
});
