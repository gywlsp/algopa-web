import { AuthTokens } from 'src/types/user';
import { removeCookie, setCookie } from './cookie';

export const setAuthCookie = ({ accessToken, refreshToken }: AuthTokens) => {
  setCookie('ACCESS_TOKEN', accessToken);
  setCookie('REFRESH_TOKEN', refreshToken);
};

export const removeAuthCookie = () => {
  removeCookie('ACCESS_TOKEN');
  removeCookie('REFRESH_TOKEN');
};
