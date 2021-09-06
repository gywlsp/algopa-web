import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { OnChange } from '@monaco-editor/react';

import Header from './header';
import EditSection from './edit';
import OutputSection from './output';
import InputModal from './input-modal';
import { GREY } from 'src/constants/colors';

import { ICode } from 'src/interfaces/code/ICode';

export type ProblemDetailCodeSectionProps = { code: ICode };

export default function ProblemDetailCodeSection({
  code,
}: ProblemDetailCodeSectionProps) {
  const [isModalOpen, setModalOpen] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    if (code) {
      setText(code.text);
    }
  }, [code]);

  const handleTextChange: OnChange = (value, _) => {
    setText(value);
  };

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
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 66%;
  height: 100%;
  background-color: ${GREY[850]};
`;
