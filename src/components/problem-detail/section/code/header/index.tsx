import React from 'react';
import styled from 'styled-components';

import P from 'src/components/common/p';
import { GREY } from 'src/constants/colors';
import MemoInput from './memo-input';

import { ICodeReadDTO } from 'src/interfaces/code/ICode';
import LanguageSelect from './language-select';
import RunCodeButton from './button/run-code';
import ViewHistoryButton from './button/view-history';

export type CodeEditSectionHeaderProps = Pick<
  ICodeReadDTO,
  'id' | 'language' | 'lastEventId'
> & {
  onRunCodeButtonClick: () => void;
};

export default function ProblemDetailCodeSectionHeader({
  id,
  language,
  lastEventId,
  onRunCodeButtonClick,
}: CodeEditSectionHeaderProps) {
  return (
    <Wrapper>
      <Title>코드</Title>
      <LanguageSelect id={id} language={language} />
      <RunCodeButton onClick={onRunCodeButtonClick} />
      <MemoInput lastEventId={lastEventId} />
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
