import React from 'react';
import styled from 'styled-components';
import LoadingOverlay from 'react-loading-overlay-ts';

import P from 'src/components/common/p';
import { FAILURE_RED, GREY, SUCCESS_BLUE } from 'src/constants/colors';

import { useCodeRunContext } from 'src/modules/context/code-run';

export default function CodeRunOutput() {
  const {
    state: {
      runOutput: { success, result, isSolved = undefined },
      isRunOutputLoading: { status, guideText },
    },
  } = useCodeRunContext();

  const textColor =
    success === true && isSolved !== false
      ? SUCCESS_BLUE
      : success === false || isSolved === false
      ? FAILURE_RED
      : GREY[600];

  return (
    <>
      {status && <StyledLoadingOverlay active spinner text={guideText} />}
      <Wrapper>
        <Title>실행 결과</Title>
        <Content color={textColor}>
          {result.split('\n').map((v) => (
            <React.Fragment key={v}>
              {v}
              <br />
            </React.Fragment>
          )) || '실행 결과가 여기에 표시됩니다.'}
        </Content>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 17.2rem;
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

const StyledLoadingOverlay = styled(LoadingOverlay)`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  font-size: 1.4rem;
  background-color: rgba(0, 0, 0, 0.1);
`;
