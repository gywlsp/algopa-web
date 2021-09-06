import React, { useState } from 'react';
import styled from 'styled-components';

import Modal from 'src/components/common/modal';
import { GREY } from 'src/constants/colors';

import CodeService from 'src/services/api/code';
import { ICode } from 'src/interfaces/code/ICode';
import { RunOutput } from 'src/types/code';

export type CodeRunInputModalProps = Pick<ICode, 'id' | 'text'> & {
  isOpen: boolean;
  onClose: () => void;
  setRunOutput: React.Dispatch<React.SetStateAction<RunOutput>>;
};

export default function CodeRunInputModal({
  id,
  text,
  isOpen,
  onClose,
  setRunOutput,
}: CodeRunInputModalProps) {
  const [input, setInput] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const data = await CodeService.execute(id, { text, input });
      setRunOutput(data);
      setInput('');
      onClose();
    } catch (err) {
      setRunOutput({ success: false, result: '코드 실행 실패' });
    }
  };

  return (
    <Modal
      title="입력"
      isOpen={isOpen}
      onClose={onClose}
      okText="코드 실행"
      onOk={handleSubmit}
      theme="dark"
    >
      <Textarea
        value={input}
        onChange={handleInputChange}
        placeholder="input 값을 입력해주세요.(optional)"
      />
    </Modal>
  );
}

const Textarea = styled.textarea`
  width: 100%;
  height: 28rem;
  padding: 1.2rem;
  border: none;
  outline: none;
  font-size: 1.4rem;
  color: ${GREY[400]};
  background-color: ${GREY[750]};

  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${GREY[500]};
    font-weight: 400;
  }
  :-ms-input-placeholder {
    color: ${GREY[500]};
    font-weight: 400;
  }
  :-mos-input-placeholder {
    color: ${GREY[500]};
    font-weight: 400;
  }
`;
