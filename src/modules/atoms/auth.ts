import { atom } from 'recoil';

import { getCookie } from 'src/lib/utils/cookie';
import { AuthTokens } from 'src/types/user';

export const authTokens = atom<AuthTokens>({
  key: 'authTokens',
  default: {
    accessToken: getCookie('ACCESS_TOKEN'),
    refreshToken: getCookie('REFRESH_TOKEN'),
  },
});
