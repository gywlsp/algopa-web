import React from 'react';
import styled from 'styled-components';

import P from 'src/components/common/p';
import { GREY } from 'src/constants/colors';
import MemoInput from './memo-input';

import { ICode } from 'src/interfaces/code/ICode';
import LanguageSelect from './language-select';
import RunCodeButton from './button/run-code';
import ViewHistoryButton from './button/view-history';
import MemoSubmitButton from './button/memo-submit';

export type CodeEditSectionHeaderProps = Pick<ICode, 'id' | 'language'>;

export default function ProblemDetailCodeSectionHeader({
  id,
  language,
}: CodeEditSectionHeaderProps) {
  return (
    <Wrapper>
      <Title>코드</Title>
      <LanguageSelect id={id} language={language} />
      <RunCodeButton id={id} />
      <MemoInput />
      <MemoSubmitButton id={id} />
      <ViewHistoryButton id={id} />
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
