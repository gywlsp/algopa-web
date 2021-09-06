import React from 'react';
import styled from 'styled-components';

import P from 'src/components/common/p';
import { FAILURE_RED, GREY, SUCCESS_BLUE } from 'src/constants/colors';

import { RunOutput } from 'src/types/code';

export default function CodeRunOutputSection({ success, result }: RunOutput) {
  const textColor = success
    ? SUCCESS_BLUE
    : success === false
    ? FAILURE_RED
    : GREY[600];

  return (
    <Wrapper>
      <Title>실행 결과</Title>
      <Content color={textColor}>
        {result.split('\n').map((v) => (
          <>
            {v}
            <br />
          </>
        )) || '실행 결과가 여기에 표시됩니다.'}
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 27.6rem;
  border-top: 0.1rem solid ${GREY[900]};
  z-index: 99;
  background-color: ${GREY[850]};
`;

const Title = styled(P).attrs({ level: 2, color: GREY[500], fontWeight: 500 })`
  width: 100%;
  height: 4.4rem;
  padding: 1.2rem;
  border-bottom: 0.1rem solid ${GREY[900]};
`;

const Content = styled(P).attrs({ level: 2 })`
  width: 100%;
  padding: 1.2rem;
  height: 23.6rem;
  overflow-y: scroll;
  -ms-overflow-style: auto;
  &::-webkit-scrollbar {
    display: flex;
    height: 0.4rem;
    background: none;
  }
  &::-webkit-scrollbar-thumb {
    background: ${GREY[900]};
    width: 0.4rem;
    opacity: 1;
  }
  &::-webkit-scrollbar-track {
    background: none;
  }
`;
