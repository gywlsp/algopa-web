import { baseConfig } from '..';

export const listConfig = (problemId: number) =>
  baseConfig(true).get(`/codes/${problemId}`);

export const createConfig = (problemId: number) =>
  baseConfig(true).post(`/codes/${problemId}`);
