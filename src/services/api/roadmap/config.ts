import { Company } from 'src/types/problem';
import { baseConfig } from '..';

export const readConfig = (company: Company) =>
  baseConfig(true).get(`/problems/roadmap${company ? `?type=${company}` : ''}`);
