import React from 'react';
import styled from 'styled-components';

import Modal from 'src/components/common/modal';
import { GREY } from 'src/constants/colors';

import { ICode } from 'src/interfaces/code/ICode';
import { CodeRunOutput } from 'src/types/code';
import { useCodeRunContext } from 'src/modules/context/code-run';

export type CodeRunInputModalProps = Pick<ICode, 'id' | 'text'> & {
  isOpen: boolean;
  onClose: () => void;
  setRunOutput: React.Dispatch<React.SetStateAction<CodeRunOutput>>;
};

export default function CodeRunInputModal() {
  const {
    state: { input, isInputModalOpen },
    action: { onInputChange, closeInputModal, onCodeRun },
  } = useCodeRunContext();

  return (
    <Modal
      title="입력"
      isOpen={isInputModalOpen}
      onClose={closeInputModal}
      okText="코드 실행"
      onOk={onCodeRun}
      theme="dark"
    >
      <Textarea
        value={input}
        onChange={onInputChange}
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
