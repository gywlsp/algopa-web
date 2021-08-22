import React from 'react';
import styled from 'styled-components';

import Header from './header';
import EditSection from './edit';
import RunOutputSection from './output';
import { GREY } from 'src/constants/colors';

export default function ProblemDetailCodeSection() {
  return (
    <Wrapper>
      <Header />
      <EditSection />
      <RunOutputSection />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 66%;
  height: 100%;
  background-color: ${GREY[850]};
`;
