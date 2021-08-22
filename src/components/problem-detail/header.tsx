import React from 'react';
import styled from 'styled-components';

import Logo from 'src/components/common/logo';
import ChevronRightIcon from 'src/assets/icons/chevron/right';
import { BLUE_GREEN } from 'src/constants/colors';

export default function ProblemDetailHeader() {
  return (
    <Wrapper>
      <Logo size="small" />
      <Title>
        코딩테스트 연습
        <ChevronRightIcon
          style={{ width: '1.2rem', height: '1.2rem', margin: '0 0.6rem' }}
          fill={BLUE_GREEN[200]}
        />
        2798 블랙잭
      </Title>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1.2rem;
  height: 4.4rem;
  background-color: ${BLUE_GREEN[800]};
`;

const Title = styled.p`
  margin-left: 1.2rem;
  font-size: 1.6rem;
  color: ${BLUE_GREEN[200]};
`;
