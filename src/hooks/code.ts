import { useCallback, useMemo, useEffect, useRef, useState } from 'react';
import { OnChange, OnMount } from '@monaco-editor/react';
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import { isEqual, debounce } from 'lodash';
import { useRouter } from 'next/router';

import { VALIDATE_DISABLE_OPTIONS } from 'src/data/swr';
import { ICodeReadDTO } from 'src/interfaces/code/ICode';
import { eventListConfig, listConfig } from 'src/services/api/code/config';
import CodeService from 'src/services/api/code';
import { CodeTextChangeEvent } from 'src/types/code';
import { CodeSectionType } from 'src/modules/atoms/problem';
import {
  codeEvents,
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
import { useCodeHistoryPlayerContext } from 'src/modules/context/code-history-player';

export const useProblemCodes = () => {
  const router = useRouter();
  const { data } = useRequest<ICodeReadDTO[]>(
    listConfig(+router?.query?.id),
    VALIDATE_DISABLE_OPTIONS
  );
  const [codes, setCodes] = useRecoilState(problemCodes);
  const [selectedCodeId, setSelectedCodeId] = useRecoilState(
    selectedProblemCodeId
  );
  const resetCodeSectionType = useResetRecoilState(CodeSectionType);

  useEffect(() => {
    resetCodeSectionType();
  }, [router?.query?.id]);

  useEffect(() => {
    if (isEqual(data, codes)) {
      return;
    }
    setCodes(data);
    if (data?.length && data[0].id !== selectedCodeId) {
      setSelectedCodeId(data[0].id);
    }
  }, [data]);

  return { data: codes };
};

export const useCodeSelect = () => {
  const [selectedCodeId, setSelectedCodeId] = useRecoilState(
    selectedProblemCodeId
  );
  const { data: codes } = useProblemCodes();

  const options = useMemo(
    () =>
      (codes || [])?.map(({ id, tryCount }) => ({
        key: id,
        label: `try_${tryCount}`,
        value: id,
        selected: id === selectedCodeId,
      })),
    [codes]
  );

  const selectCode = useCallback((id: string) => {
    setSelectedCodeId(id);
  }, []);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const { value } = e.target;
      selectCode(value);
    },
    [selectCode]
  );
  return { options, onChange: handleChange, value: selectedCodeId };
};

export const useSelectedCodeEdit = () => {
  const code = useRecoilValue(selectedProblemCode);
  const [text, setText] = useRecoilState(selectedProblemCodeText);
  const [lastEventId, setLastEventId] = useRecoilState(selectedCodeLastEventId);
  const [events, setEvents] = useState([]);
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
        setEvents([]);
      } catch (err) {
        console.log(err);
      }
    }, 1000),
    []
  );

  const handleTextChange: OnChange = useCallback(
    (v, e) => {
      const updatedEvents = events.concat({
        ...e,
        modifiedText: v,
        timestamp: new Date(),
      });
      setText(v);
      setEvents(updatedEvents);
      sendEvents(code?.id, updatedEvents);
    },
    [events, code?.id]
  );

  return { code, text, lastEventId, onChange: handleTextChange };
};

export const useCodeEvents = () => {
  const codeId = useRecoilValue(selectedProblemCodeId);
  const codeSectionType = useRecoilValue(CodeSectionType);
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
  }, [data, codeSectionType]);
};

export const useCodeEventHighlight = () => {
  const editorRef = useRef(null);
  const codeEvent = useRecoilValue(selectedCodeEvent);

  useEffect(() => {
    highlight(editorRef?.current);
  }, [editorRef.current, codeEvent]);

  const getHighlightRange = () => {
    if (!codeEvent) {
      return {
        startLineNumber: 0,
        startColumn: 0,
        endLineNumber: 0,
        endColumn: 0,
      };
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

  const handleEditorDidMount: OnMount = useCallback(
    (editor, _) => {
      editorRef.current = editor;
      highlight();
    },
    [editorRef, highlight]
  );

  return {
    text: codeEvent?.modifiedText,
    onEditorDidMount: handleEditorDidMount,
  };
};

export const useEventIndexEdit = () => {
  const codeId = useRecoilValue(selectedProblemCodeId);
  const selectedEvent = useRecoilValue(selectedCodeEvent);
  const [index, setIndex] = useState('');
  const [isEditing, setEditing] = useState(false);
  const {
    action: { initPlaying },
  } = useCodeHistoryPlayerContext();

  useEffect(() => {
    if (isEditing) {
      setEditing(false);
    }
    setIndex(selectedEvent?.index || '');
  }, [selectedEvent]);

  const handleEditStart = useCallback(() => {
    setEditing(true);
  }, []);

  const handleEditCancel = useCallback(() => {
    setIndex(selectedEvent?.index || '');
    setEditing(false);
  }, [selectedEvent?.index]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setIndex(e.target.value);
  }, []);

  const hasIndex = selectedEvent?.index !== undefined;

  const handleSubmit = useCallback(async () => {
    try {
      await CodeService.createEventIndex({
        codeId,
        eventId: selectedEvent?.id,
        index,
      });
      alert(hasIndex ? '인덱스가 수정되었습니다.' : '인덱스가 생성되었습니다.');
      handleEditCancel();
      initPlaying();
    } catch (err) {
      alert('인덱스 생성에 실패하였습니다.');
    }
  }, [codeId, selectedEvent?.id, index, handleEditCancel, initPlaying]);

  return {
    index,
    hasIndex,
    isEditing,
    onStart: handleEditStart,
    onCancel: handleEditCancel,
    onSubmit: handleSubmit,
    onChange: handleChange,
  };
};
