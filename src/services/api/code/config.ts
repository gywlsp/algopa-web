import { baseConfig } from '..';

export const listConfig = (problemId: number) =>
  baseConfig(true).get(`/code/${problemId}`);
