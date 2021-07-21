import React from 'react';
import Link from '../link';
import styled from 'styled-components';

import Img from '../img';
import P from '../p';
import { BLUE_GREEN, GREY, WHITE } from 'src/constants/colors';

import { IProblem } from 'src/interfaces/problem/IProblem';

export type ProblemCardProps = {
  index?: number;
  isRouting?: boolean;
  className?: string;
} & Partial<IProblem>;

export default function ProblemCard({
  index,
  className,
  id,
  number = 1260,
  levelImgLink,
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
        <Img width="100%" height="auto" src={levelImgLink} alt={title} cover />
        <StyledP>{number}</StyledP>
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
      <Img width="100%" height="auto" src={levelImgLink} alt={title} cover />
      <P>{number}</P>
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

const StyledP = styled(P).attrs({ level: 4 })`
  margin-bottom: 1.2rem;
`;
