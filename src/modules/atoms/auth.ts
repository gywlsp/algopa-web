import { atom } from 'recoil';
import { getCookie } from 'src/lib/utils/cookie';

export const authTokens = atom({
  key: 'authTokens',
  default: {
    accessToken: getCookie('ACCESS_TOKEN'),
    refreshToken: getCookie('REFRESH_TOKEN'),
  },
});
