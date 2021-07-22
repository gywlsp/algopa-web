import { baseConfig } from '..';

export const readConfig = () => baseConfig(true).get('/problems/v1/roadmap');
