import useRequest from '.';

import { ICodeReadDTO } from 'src/interfaces/code/ICode';
import { listConfig } from 'src/services/api/code/config';

export const useCodeList = (problemId?: number) =>
  useRequest<ICodeReadDTO[]>(listConfig(problemId), {
    revalidateOnFocus: false,
    revalidateOnMount: false,
    revalidateOnReconnect: false,
  });
