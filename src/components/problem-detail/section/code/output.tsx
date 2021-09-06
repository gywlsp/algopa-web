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
        {result || '실행 결과가 여기에 표시됩니다.'}
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  border-top: 0.1rem solid ${GREY[900]};
  z-index: 9999;
  background-color: ${GREY[850]};
`;

const Title = styled(P).attrs({ level: 2, color: GREY[500], fontWeight: 500 })`
  width: 100%;
  height: 4.4rem;
  padding: 1.2rem;
  border-bottom: 0.1rem solid ${GREY[900]};
`;

const Content = styled(P).attrs({ level: 2 })`
  padding: 1.2rem;
`;
