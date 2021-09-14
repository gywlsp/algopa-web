import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { debounce } from 'lodash';
import { OnChange } from '@monaco-editor/react';

import Header from './header';
import EditSection from './edit';
import OutputSection from './output';
import InputModal from './input-modal';
import { GREY } from 'src/constants/colors';

import EventService from 'src/services/api/event';
import { ICodeReadDTO } from 'src/interfaces/code/ICode';
import { RunOutput } from 'src/types/code';

export type ProblemDetailCodeSectionProps = { code: ICodeReadDTO };

export default function ProblemDetailCodeSection({
  code,
}: ProblemDetailCodeSectionProps) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [text, setText] = useState('');
  const [runOutput, setRunOutput] = useState<RunOutput>({
    success: undefined,
    result: '',
  });
  const [lastEventId, setLastEventId] = useState<string>();
  const events = [];

  useEffect(() => {
    if (code) {
      setText(code.text);
      setLastEventId(code.lastEventId);
    }
  }, [code]);

  const handleTextChange: OnChange = (v, e) => {
    events.push({
      ...e,
      modifiedText: v,
      timestamp: new Date(),
    });
    sendEvents(events);
  };

  const sendEvents = useCallback(
    debounce(async (events) => {
      try {
        const { lastEventId } = await EventService.create(code?.id, events);
        setLastEventId(lastEventId);
        events.splice(0, events.length);
      } catch (err) {
        console.log(err);
      }
    }, 1000),
    []
  );

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Wrapper>
      <Header {...code} onRunCodeButtonClick={openModal} />
      <EditSection {...code} text={text} onChange={handleTextChange} />
      <InputModal
        {...code}
        text={text}
        setRunOutput={setRunOutput}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
      <OutputSection {...runOutput} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 66%;
  height: 100%;
  background-color: ${GREY[850]};
`;
