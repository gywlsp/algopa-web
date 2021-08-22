import React from 'react';
import styled from 'styled-components';

import P from 'src/components/common/p';
import { GREY } from 'src/constants/colors';

export default function CodeRunOutputSection() {
  return (
    <Wrapper>
      <Title>실행 결과</Title>
      <GuideText>실행 결과가 여기에 표시됩니다.</GuideText>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 22rem;
  border-top: 0.1rem solid ${GREY[900]};
  zindex: 9999;
  background-color: ${GREY[850]};
`;

const Title = styled(P).attrs({ level: 2, color: GREY[500] })`
  width: 100%;
  height: 4.4rem;
  padding: 1.2rem;
  border-bottom: 0.1rem solid ${GREY[900]};
`;

const GuideText = styled(P).attrs({ level: 2, color: GREY[600] })`
  padding: 1.2rem;
`;
