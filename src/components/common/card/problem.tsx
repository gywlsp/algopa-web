import React from 'react';
import Link from '../link';
import styled from 'styled-components';

import { BLUE_GREEN, GREY, WHITE } from 'src/constants/colors';
import P from '../p';

export type ProblemCardProps = {
  index?: number;
  id?: number | string;
  title?: string;
  level?: string;
  isRouting?: boolean;
  className?: string;
};

export default function ProblemCard({
  index,
  className,
  id = 1260,
  level,
  isRouting = true,
  title = '문제 제목',
}: ProblemCardProps) {
  if (isRouting) {
    return (
      <StyledLink href={`/problems/${id}`} className={className}>
        {typeof index === 'number' && (
          <IndexLabel>
            <P level={3} fontWeight={500} color={WHITE}>
              {index}
            </P>
          </IndexLabel>
        )}
        <Level>난이도</Level>
        <StyledP>{id}</StyledP>
        <StyledP>{title}</StyledP>
      </StyledLink>
    );
  }

  return (
    <Wrapper className={className}>
      {typeof index === 'number' && (
        <IndexLabel>
          <P level={3} fontWeight={500} color={WHITE}>
            {index}
          </P>
        </IndexLabel>
      )}
      <Level>난이도</Level>
      <P>{id}</P>
      <P>{title}</P>
    </Wrapper>
  );
}

const StyledLink = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-right: 1.2rem;
  padding: 2rem;
  border: 1px solid ${GREY[400]};
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-right: 1.2rem;
  padding: 2rem;
  border: 1px solid ${GREY[400]};
`;

const IndexLabel = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.8rem;
  height: 2.8rem;
  background-color: ${BLUE_GREEN[500]};
`;

const Level = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 12rem;
  margin-bottom: 2rem;
  border: 1px solid ${GREY[400]};
`;

const StyledP = styled(P).attrs({ level: 4 })`
  margin-bottom: 1.2rem;
`;
