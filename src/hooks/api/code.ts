import { useCallback, useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { isEqual, debounce } from 'lodash';

import { VALIDATE_DISABLE_OPTIONS } from 'src/data/swr';
import { ICodeReadDTO } from 'src/interfaces/code/ICode';
import { listConfig } from 'src/services/api/code/config';
import {
  problemCodes,
  selectedProblemCodeId,
} from 'src/modules/atoms/code';
import { selectedProblemCode } from 'src/modules/selectors/code';
import useRequest from '.';

export const useProblemCodes = (problemId?: number) => {
  const [codes, setCodes] = useRecoilState(problemCodes);
  const [selectedCodeId, setSelectedCodeId] = useRecoilState(
    selectedProblemCodeId
  );
  const { data } = useRequest<ICodeReadDTO[]>(
    listConfig(problemId),
    VALIDATE_DISABLE_OPTIONS
  );

  useEffect(() => {
    if (!isEqual(data, codes)) {
      setCodes(data);
    }
    if (data && data[0].id !== selectedCodeId) {
      setSelectedCodeId(data[0].id);
    }
  }, [data]);

  return { data: codes };
};

export const useCodeList = (problemId?: number) =>
  useRequest<ICodeReadDTO[]>(listConfig(problemId), {
    revalidateOnFocus: false,
    revalidateOnMount: false,
    revalidateOnReconnect: false,
  });
