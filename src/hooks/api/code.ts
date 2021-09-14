import useRequest from '.';

import { ICode } from 'src/interfaces/code/ICode';
import { listConfig } from 'src/services/api/code/config';

export const useCodeList = (problemId?: number) =>
  useRequest<ICode[]>(listConfig(problemId), {
    revalidateOnFocus: false,
    revalidateOnMount: false,
    revalidateOnReconnect: false,
  });
