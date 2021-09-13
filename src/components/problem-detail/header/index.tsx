import React from 'react';
import styled from 'styled-components';

import P from 'src/components/common/p';
import Logo from 'src/components/common/logo';
import CodeSelect, { CodeSelectProps } from './code-select';
import NewCodeButton from './new-code-button';
import ChevronRightIcon from 'src/assets/icons/chevron/right';
import { BLUE_GREEN } from 'src/constants/colors';

import { IProblemReadDTO } from 'src/interfaces/problem/IProblem';

export type ProblemDetailHeaderProps = Pick<IProblemReadDTO, 'id' | 'title'> &
  CodeSelectProps;

export default function ProblemDetailHeader({
  id,
  title,
  ...codeSelectProps
}: ProblemDetailHeaderProps) {
  const label = `${id}. ${title}`;

  return (
    <Wrapper>
      <Logo size="small" />
      <Title>
        코딩테스트 연습
        {id && (
          <>
            <ChevronRightIcon
              style={{ width: '1.2rem', height: '1.2rem', margin: '0 0.6rem' }}
              fill={BLUE_GREEN[200]}
            />
            {label}
          </>
        )}
      </Title>
      <CodeSelect {...codeSelectProps} />
      <NewCodeButton id={id} />
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

const Title = styled(P).attrs({
  level: 3,
  color: BLUE_GREEN[200],
})`
  margin-left: 1.2rem;
`;
