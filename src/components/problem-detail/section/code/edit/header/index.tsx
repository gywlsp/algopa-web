import React from 'react';
import styled from 'styled-components';

import P from 'src/components/common/p';
import { GREY } from 'src/constants/colors';
import IndexTitleInput from './index-title-input';
import LanguageSelect from './language-select';
import CodeRunButton from './button/code-run';
import CodeHistoryViewButton from './button/history-view';

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
