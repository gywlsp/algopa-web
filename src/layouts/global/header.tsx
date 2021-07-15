import React from 'react';
import styled from 'styled-components';

import Logo from 'src/components/common/logo';
import GlobalNav from './nav';

export default function GlobalHeader() {
  return (
    <Wrapper>
      <Logo />
      <GlobalNav />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1.2rem 4rem;
  box-shadow: 0px 4px 2px -2px rgba(0, 0, 0, 0.2);
`;
