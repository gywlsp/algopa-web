import React from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';

const IndexTitleInput = dynamic(() => import('./index-title-input'));
const LanguageSelect = dynamic(() => import('./language-select'));
const CodeRunButton = dynamic(() => import('./button/code-run'));
const CodeHistoryViewButton = dynamic(() => import('./button/history-view'));
const P = dynamic(() => import('src/components/common/p'));
import { GREY } from 'src/constants/colors';

export default function CodeEditSectionHeader() {
  return (
    <Wrapper>
      <Title>코드</Title>
      <LanguageSelect />
      <CodeRunButton />
      <IndexTitleInput />
      <CodeHistoryViewButton />
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 4.4rem;
  padding: 1.2rem;
  margin-bottom: 0.8rem;
  border-bottom: 0.1rem solid ${GREY[900]};
`;

const Title = styled(P).attrs({ level: 2, color: GREY[400], fontWeight: 500 })`
  margin-right: 2rem;
`;
