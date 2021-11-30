import React from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';

import Logo from 'src/components/common/logo';
const Title = dynamic(() => import('./title'));
const CodeSelect = dynamic(() => import('./code-select'));
const CodeCreateButton = dynamic(() => import('./code-create-button'));
const CodeSubmitButton = dynamic(() => import('./code-submit-button'));
import { BLUE_GREEN } from 'src/constants/colors';

export default function ProblemDetailHeader() {
  return (
    <Wrapper>
      <Logo size="small" />
      <Title />
      <CodeSelect />
      <CodeSubmitButton />
      <CodeCreateButton />
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
