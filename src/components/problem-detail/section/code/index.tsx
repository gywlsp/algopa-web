import React from 'react';
import styled from 'styled-components';

import Header from './header';
import EditSection from './edit';
import RunOutputSection from './output';
import { GREY } from 'src/constants/colors';

import { ICode } from 'src/interfaces/code/ICode';

export type ProblemDetailCodeSectionProps = { code: ICode };

export default function ProblemDetailCodeSection({
  code,
}: ProblemDetailCodeSectionProps) {
  return (
    <Wrapper>
      <Header {...code} />
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
