import { baseConfig } from '..';

export const meReadConfig = () => baseConfig(true).get('/users/me');
