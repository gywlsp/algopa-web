import React from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('./header'));
const Editor = dynamic(() => import('./editor'));
const RunOutput = dynamic(() => import('./code-run/output'));
const RunInputModal = dynamic(() => import('./code-run/input-modal'));
const SolveCompleteModal = dynamic(() => import('./complete-modal'));
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
