import React from 'react';
import styled from 'styled-components';

import PlayIcon from 'src/assets/icons/play';
import { GREY } from 'src/constants/colors';

import { useCodeRun } from 'src/hooks/api/code';

export default function CodeRunButton() {
  const { openModal } = useCodeRun();

  return (
    <Button onClick={openModal}>
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
