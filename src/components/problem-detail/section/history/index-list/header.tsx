import React from 'react';
import styled from 'styled-components';

import P from 'src/components/common/p';
import { GREY } from 'src/constants/colors';

export default function IndexListSectionHeader() {
  return (
    <Wrapper>
      <Title>인덱스 목록</Title>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 3.2rem;
  padding: 1.2rem;
  border-bottom: 0.1rem solid ${GREY[900]};
`;

const Title = styled(P).attrs({ level: 1, color: GREY[400], fontWeight: 500 })`
  margin-right: auto;
`;
