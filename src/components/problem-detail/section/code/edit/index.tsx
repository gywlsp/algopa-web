import React from 'react';
import styled from 'styled-components';

import Header from './header';
import Editor from './editor';
import RunOutput from './code-run/output';
import RunInputModal from './code-run/input-modal';
import SolveCompleteModal from './complete-modal';
import { GREY } from 'src/constants/colors';

export type CodeEditSectionProps = {
  isShown: boolean;
};

export default function CodeEditSection({ isShown }: CodeEditSectionProps) {
  return (
    <Wrapper isShown={isShown}>
      <Header />
      <Editor />
      <RunInputModal />
      <RunOutput />
      <SolveCompleteModal />
    </Wrapper>
  );
}

const Wrapper = styled.div<CodeEditSectionProps>`
  display: ${({ isShown }) => (isShown ? 'block' : 'none')};
  position: relative;
  width: 66%;
  height: 100%;
  background-color: ${GREY[850]};
`;
