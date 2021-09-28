import React from 'react';
import styled from 'styled-components';

import P from 'src/components/common/p';
import { GREY } from 'src/constants/colors';

export default function EventDetailSectionHeader() {
  return (
    <Wrapper>
      <Title>이벤트 상세</Title>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 4.4rem;
  padding: 1.2rem;
  border-bottom: 0.1rem solid ${GREY[900]};
`;

const Title = styled(P).attrs({ level: 2, color: GREY[400] })`
  margin-right: auto;
`;
