import React from 'react';
import styled from 'styled-components';

import P from 'src/components/common/p';
import { GREY } from 'src/constants/colors';

function IndexListSectionHeader() {
  return (
    <Wrapper>
      <Title>인덱스 목록</Title>
    </Wrapper>
  );
}

export default React.memo(IndexListSectionHeader, () => true);

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
