import { useCallback, useEffect, useRef, useState } from 'react';
import { OnChange } from '@monaco-editor/react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { isEqual, debounce } from 'lodash';

import { VALIDATE_DISABLE_OPTIONS } from 'src/data/swr';
import { ICodeReadDTO } from 'src/interfaces/code/ICode';
import { eventListConfig, listConfig } from 'src/services/api/code/config';
import CodeService from 'src/services/api/code';
import { CodeTextChangeEvent } from 'src/types/code';
import {
  codeEvents,
  codeRunOutput,
  isCodeRunInputModalOpen,
  problemCodes,
  selectedCodeEventId,
  selectedCodeLastEventId,
  selectedProblemCodeId,
  selectedProblemCodeText,
} from 'src/modules/atoms/code';
import {
  selectedCodeEvent,
  selectedProblemCode,
} from 'src/modules/selectors/code';
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
    if (data && data[0]?.id !== selectedCodeId) {
      setSelectedCodeId(data[0]?.id);
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
  const [lastEventId, setLastEventId] = useRecoilState(selectedCodeLastEventId);
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

export const useCodeRun = () => {
  const codeId = useRecoilValue(selectedProblemCodeId);
  const text = useRecoilValue(selectedProblemCodeText);
  const [input, setInput] = useState('');
  const [isModalOpen, setModalOpen] = useRecoilState(isCodeRunInputModalOpen);
  const [runOutput, setRunOutput] = useRecoilState(codeRunOutput);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSubmit = async () => {
    try {
      const data = await CodeService.execute(codeId, { text, input });
      setRunOutput(data);
      setInput('');
      closeModal();
    } catch (err) {
      setRunOutput({ success: false, result: '코드 실행 실패' });
    }
  };

  return {
    input,
    isModalOpen,
    runOutput,
    openModal,
    closeModal,
    onInputChange: handleInputChange,
    onCodeSubmit: handleSubmit,
  };
};

export const useCodeEvents = () => {
  const codeId = useRecoilValue(selectedProblemCodeId);
  const { data } = useRequest<CodeTextChangeEvent[]>(
    eventListConfig(codeId),
    VALIDATE_DISABLE_OPTIONS
  );
  const [events, setEvents] = useRecoilState(codeEvents);
  const [selectedEventId, setSelectedEventId] =
    useRecoilState(selectedCodeEventId);

  useEffect(() => {
    const orderedEvents = data?.map((v, i) => ({ ...v, order: i + 1 }));
    if (!isEqual(orderedEvents, events)) {
      setEvents(orderedEvents);
    }
    if (data && data[0]?.id !== selectedEventId) {
      setSelectedEventId(data[0]?.id);
    }
  }, [data]);

  return { data: events };
};

export const useCodeEventHighlight = () => {
  const editorRef = useRef(null);
  const codeEvent = useRecoilValue(selectedCodeEvent);

  useEffect(() => {
    highlight(editorRef?.current);
  }, [editorRef.current, codeEvent]);

  const getHighlightRange = () => {
    if (!codeEvent) {
      return undefined;
    }

    const { text, range } = codeEvent?.changes[0];
    if (!text) {
      return {
        startLineNumber: range.startLineNumber,
        startColumn: range.startColumn,
        endLineNumber: range.startLineNumber,
        endColumn: range.startColumn,
      };
    }
    if (text.includes('\n')) {
      const eolCnt = text.match(/\n/g).length;
      return {
        startLineNumber: range.startLineNumber + 1,
        startColumn: 1,
        endLineNumber: range.endLineNumber + eolCnt,
        endColumn: 1 + text.length,
      };
    }
    return { ...range, endColumn: range.endColumn + text.length };
  };

  const highlight = (editor = editorRef?.current) => {
    const highlightRange = getHighlightRange();
    editor?.deltaDecorations(
      [],
      [
        {
          range: highlightRange,
          options: { inlineClassName: 'event-text-highlight' },
        },
        {
          range: highlightRange,
          options: {
            isWholeLine: true,
            className: 'event-text-line-highlight',
          },
        },
      ]
    );
  };

  return { editorRef, text: codeEvent?.modifiedText, highlight };
};
