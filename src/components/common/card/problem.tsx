import React, { ReactNode, ReactNodeArray } from 'react';
import Link from '../link';
import styled from 'styled-components';

import Img from '../img';
import P from '../p';
import { BLUE_GREEN, GREY, WHITE } from 'src/constants/colors';

import { IProblem } from 'src/interfaces/problem/IProblem';
import { bojLink } from 'src/data';

export type ProblemCardProps = {
  index?: number;
  isRouting?: boolean;
  className?: string;
} & Partial<IProblem>;

export default function ProblemCard(props: ProblemCardProps) {
  const { index, number = 1260, levelImgLink, title = '문제 제목' } = props;

  return (
    <ContentWrapper {...props}>
      {typeof index === 'number' && (
        <IndexLabel>
          <P level={3} fontWeight={500} color={WHITE}>
            {index}
          </P>
        </IndexLabel>
      )}
      <LevelImg src={levelImgLink} alt={title} />
      <StyledP>{number}</StyledP>
      <StyledP>{title}</StyledP>
    </ContentWrapper>
  );
}

const ContentWrapper = (
  props: ProblemCardProps & { children: ReactNode | ReactNodeArray }
) => {
  const { isRouting = true, className, number, children } = props;
  if (isRouting) {
    return (
      <A
        href={`${bojLink}/problem/${number}`}
        target="_blank"
        className={className}
      >
        {children}
      </A>
    );
  }
  return <Wrapper className={className}>{children}</Wrapper>;
};

const StyledLink = styled(Link)`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 22.4rem;
  height: 27.2rem;
  margin-right: 1.2rem;
  padding: 2rem 2rem 0.8rem;
  border: 1px solid ${GREY[400]};
`;

const A = styled.a`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 22.4rem;
  height: 27.2rem;
  text-decoration: none;
  margin-right: 1.2rem;
  padding: 2rem 2rem 0.8rem;
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

const LevelImg = styled(Img).attrs({
  width: '100%',
  height: '14rem',
  cover: true,
  border: true,
})`
  margin-bottom: 2rem;
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

const StyledP = styled(P).attrs({ level: 4, width: '100%', ellipsis: true })`
  margin-bottom: 1.2rem;
`;
