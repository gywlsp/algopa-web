import { useCallback, useEffect, useState } from 'react';
import { OnChange } from '@monaco-editor/react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { isEqual, debounce } from 'lodash';

import { VALIDATE_DISABLE_OPTIONS } from 'src/data/swr';
import { ICodeReadDTO } from 'src/interfaces/code/ICode';
import { listConfig } from 'src/services/api/code/config';
import CodeService from 'src/services/api/code';
import {
  problemCodes,
  selectedProblemCodeId,
  selectedProblemCodeText,
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

export const useSelectedCode = () => {
  const [selectedCodeId, setSelectedCodeId] = useRecoilState(
    selectedProblemCodeId
  );
  const selectedCode = useRecoilValue(selectedProblemCode);
  const selectCode = (id: string) => {
    setSelectedCodeId(id);
  };
  return { id: selectedCodeId, data: selectedCode, select: selectCode };
};

export const useSelectedCodeEdit = () => {
  const code = useRecoilValue(selectedProblemCode);
  const [text, setText] = useRecoilState(selectedProblemCodeText);
  const [lastEventId, setLastEventId] = useState<string>();
  const events = [];

  useEffect(() => {
    if (code) {
      setText(code.text);
      setLastEventId(code.lastEventId);
    }
  }, [code]);

  const sendEvents = useCallback(
    debounce(async (codeId, events) => {
      try {
        const { lastEventId } = await CodeService.createEvent(codeId, events);
        setLastEventId(lastEventId);
        events.splice(0, events.length);
      } catch (err) {
        console.log(err);
      }
    }, 1000),
    []
  );

  const handleTextChange: OnChange = (v, e) => {
    events.push({
      ...e,
      modifiedText: v,
      timestamp: new Date(),
  });
    sendEvents(code?.id, events);
  };

  return { code, text, lastEventId, onChange: handleTextChange };
};
