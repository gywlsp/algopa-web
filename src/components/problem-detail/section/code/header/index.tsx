import React from 'react';
import styled from 'styled-components';

import P from 'src/components/common/p';
import { GREY } from 'src/constants/colors';
import MemoInput from './memo-input';

export default function ProblemDetailCodeSectionHeader() {
  return (
    <Wrapper>
      <P level={2} color={GREY[400]}>
        코드
      </P>
      <MemoInput value="" />
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 4.4rem;
  padding: 1.2rem;
  margin-bottom: 0.8rem;
  border-bottom: 0.1rem solid ${GREY[900]};
`;
