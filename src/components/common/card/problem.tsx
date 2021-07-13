import React from 'react';
import Link from '../link';
import styled from 'styled-components';

import { BLUE_GREEN } from 'src/constants/colors';

export type ProblemCardProps = {
  id?: number | string;
  title?: string;
  level?: string;
  isRouting?: boolean;
  className?: string;
};

export default function ProblemCard({
  className,
  id = 1260,
  level,
  isRouting = true,
  title = '문제 제목',
}: ProblemCardProps) {
  if (isRouting) {
    return (
      <StyledLink href={`/problems/${id}`} className={className}>
        <Level>난이도</Level>
        <P>{id}</P>
        <P>{title}</P>
      </StyledLink>
    );
  }

  return (
    <Wrapper className={className}>
      <Level>난이도</Level>
      <P>{id}</P>
      <P>{title}</P>
    </Wrapper>
  );
}

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-right: 1.2rem;
  padding: 2rem;
  border: 1px solid ${BLUE_GREEN[500]};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-right: 1.2rem;
  padding: 2rem;
  border: 1px solid ${BLUE_GREEN[500]};
`;

const Level = styled.div`
  width: 100%;
  height: 12rem;
  margin-bottom: 2rem;
  border: 1px solid ${BLUE_GREEN[500]};
`;

const P = styled.p`
  font-size: 1.8rem;
  margin-bottom: 1.2rem;
`;
