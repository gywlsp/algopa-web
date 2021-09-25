import React from 'react';
import styled from 'styled-components';
import { useRecoilValue } from 'recoil';

import P from 'src/components/common/p';
import Logo from 'src/components/common/logo';
import CodeSelect from './code-select';
import NewCodeButton from './new-code-button';
import ChevronRightIcon from 'src/assets/icons/chevron/right';
import { BLUE_GREEN } from 'src/constants/colors';

import { problem } from 'src/modules/atoms/problem';

export default function ProblemDetailHeader() {
  const problemData = useRecoilValue(problem);
  const label = `${problemData?.id}. ${problemData?.title}`;

  return (
    <Wrapper>
      <Logo size="small" />
      <Title>
        코딩테스트 연습
        {problemData?.id && (
          <>
            <ChevronRightIcon
              style={{ width: '1.2rem', height: '1.2rem', margin: '0 0.6rem' }}
              fill={BLUE_GREEN[200]}
            />
            {label}
          </>
        )}
      </Title>
      <CodeSelect />
      <NewCodeButton />
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
