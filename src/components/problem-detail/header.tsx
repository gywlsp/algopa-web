import React from 'react';
import styled from 'styled-components';

import P from 'src/components/common/p';
import Button from 'src/components/common/button';
import Logo from 'src/components/common/logo';
import ChevronRightIcon from 'src/assets/icons/chevron/right';
import { BLUE_GREEN } from 'src/constants/colors';

import { IProblemReadDTO } from 'src/interfaces/problem/IProblem';
import CodeService from 'src/services/api/code';

export type ProblemDetailHeaderProps = Pick<
  IProblemReadDTO,
  'number' | 'title'
>;

export default function ProblemDetailHeader({
  number,
  title,
}: ProblemDetailHeaderProps) {
  const label = `${number}. ${title}`;

  const createNewCode = async () => {
    if (!confirm('문제를 새로 푸시겠습니까?')) {
      return;
    }
    try {
      await CodeService.create(number);
    } catch (err) {
      alert('코드 생성 실패');
    }
  };

  return (
    <Wrapper>
      <Logo size="small" />
      <Title>
        코딩테스트 연습
        <ChevronRightIcon
          style={{ width: '1.2rem', height: '1.2rem', margin: '0 0.6rem' }}
          fill={BLUE_GREEN[200]}
        />
        {label}
      </Title>
      <StyledButton
        onClick={createNewCode}
        size="small"
        type="primary"
        title="새로 풀기"
        hasPadding
      />
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

const StyledButton = styled(Button)`
  margin-left: auto;
`;
