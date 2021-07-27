import { baseConfig } from '..';

export const meReadConfig = (token?: string) =>
  baseConfig(true, token).get('/users/v1/me');
