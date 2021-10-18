import React from 'react';
import styled from 'styled-components';

import Header from './header';
import EditSection from './edit';
import OutputSection from './output';
import InputModal from './modal/input';
import { GREY } from 'src/constants/colors';

export type ProblemCodeSectionProps = {
  isShown: boolean;
};

export default function ProblemCodeSection({
  isShown,
}: ProblemCodeSectionProps) {
  return (
    <Wrapper isShown={isShown}>
      <Header />
      <EditSection />
      <InputModal />
      <OutputSection />
    </Wrapper>
  );
}

const Wrapper = styled.div<ProblemCodeSectionProps>`
  display: ${({ isShown }) => (isShown ? 'block' : 'none')};
  position: relative;
  width: 66%;
  height: 100%;
  background-color: ${GREY[850]};
`;
