import { baseConfig } from '..';

export const readConfig = () => baseConfig(true).get('/problems/roadmap');
