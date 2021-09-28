import React from 'react';
import styled from 'styled-components';

import Header from './header';
import Content from './content';
import { GREY } from 'src/constants/colors';

export default function EventDetailSection() {
  return (
    <Wrapper>
      <Header />
      <Content />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 17.2rem;
  border-top: 0.1rem solid ${GREY[900]};
  background-color: ${GREY[850]};
`;
