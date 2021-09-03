import React from 'react';
import styled from 'styled-components';

import { GREY } from 'src/constants/colors';

import CodeService from 'src/services/api/code';
import { ICode } from 'src/interfaces/code/ICode';
import PlayIcon from 'src/assets/icons/play';

export type RunCodeButtonProps = Pick<ICode, 'id'>;

export default function RunCodeButton({ id }: RunCodeButtonProps) {
  const runCode = async () => {
    console.log('코드 실행');
    return;
    try {
    } catch (err) {
      alert('코드 생성 실패');
    }
  };

  return (
    <Button onClick={runCode}>
      <PlayIcon
        style={{ width: '1.2rem', height: '1.2rem', marginRight: '0.6rem' }}
      />
      코드 실행
    </Button>
  );
}
const Button = styled.button`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  color: ${GREY[400]};
  background-color: ${GREY[800]};
  padding: 0.6rem 0.8rem;
  margin-right: 1.2rem;
  border: none;
  border-radius: 0.2rem;
  cursor: pointer;
`;
