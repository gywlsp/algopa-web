import React from 'react';
import styled from 'styled-components';

import Header from './header';
import EditSection from './edit';
import OutputSection from './output';
import InputModal from './input-modal';
import { GREY } from 'src/constants/colors';

export default function ProblemCodeSection() {
  return (
    <Wrapper>
      <Header />
      <EditSection />
      <InputModal />
      <OutputSection />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  width: 66%;
  height: 100%;
  background-color: ${GREY[850]};
`;
