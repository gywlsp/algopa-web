import { IUser } from 'src/interfaces/user/IUser';
import { Provider } from 'src/types/user';
import { baseConfig } from '..';

export const loginConfig = (provider: Provider, token: string) =>
  baseConfig(true, token).get(`/auth/v1/login/${provider}`);

export const validateNicknameConfig = (nickname: string) =>
  baseConfig().get(`/auth/v1/validation/${nickname}`);

export const validateBojIdConfig = (id: string) =>
  baseConfig().get(`/auth/v1/validation/boj/${id}`);

export const getBojAuthTokenConfig = (bojId: string) =>
  baseConfig().get(`/auth/v1/authentication/boj/token/${bojId}`);

export const authenticateBojIdConfig = (bojId: string) =>
  baseConfig().get(`/auth/v1/authentication/boj/${bojId}`);

export const joinConfig = (
  data: Pick<IUser, 'email' | 'nickname' | 'provider' | 'bojId'>,
  token: string
) => baseConfig(true, token).post(`/auth/v1/join`, data);

export const refreshConfig = (refreshToken: string) =>
  baseConfig(true, refreshToken).get('/auth/v1/refresh');
