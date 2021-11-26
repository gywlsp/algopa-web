import React from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';

const Form = dynamic(() => import('src/components/join/form'));
import Logo from 'src/components/common/logo';
import { GREY } from 'src/constants/colors';

export default function JoinPage() {
  return (
    <Wrapper>
      <StyledLogo size="large" />
      <Form />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  background-color: ${GREY[100]};
`;

const StyledLogo = styled(Logo)`
  padding: 4rem 0 3rem;
`;
