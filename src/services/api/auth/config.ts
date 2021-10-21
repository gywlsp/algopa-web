import { IUser, IUserInputDTO } from 'src/interfaces/user/IUser';
import { Provider } from 'src/types/user';
import { baseConfig } from '..';

export const loginConfig = (provider: Provider, token: string) =>
  baseConfig(true, token).get(`/auth/login/${provider}`);

export const validateNicknameConfig = (nickname: string) =>
  baseConfig().get(`/auth/validation/${nickname}`);

export const validateBojIdConfig = (id: string) =>
  baseConfig().get(`/auth/validation/boj/${id}`);

export const getBojAuthTokenConfig = (bojId: string) =>
  baseConfig().get(`/auth/authentication/boj/token/${bojId}`);

export const authenticateBojIdConfig = (bojId: string) =>
  baseConfig().get(`/auth/authentication/boj/${bojId}`);

export const joinConfig = (data: IUserInputDTO, token: string) =>
  baseConfig(true, token).post(`/auth/join/${data.provider}`, data);

export const refreshConfig = (refreshToken: string) =>
  baseConfig(true, refreshToken).get('/auth/refresh');
