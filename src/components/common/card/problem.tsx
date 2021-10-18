import React, { ReactNode, ReactNodeArray } from 'react';
import Link from '../link';
import styled from 'styled-components';

import Img from '../img';
import P from '../p';
import { BLUE_GREEN, GREY, WHITE } from 'src/constants/colors';

import { IProblem } from 'src/interfaces/problem/IProblem';
import { Theme } from 'src/types';

export type ProblemCardProps = {
  index?: number;
  isRouting?: boolean;
  className?: string;
  problemLevel?: number;
  theme?: Theme;
  //vis-network node에 level property 있어서 겹치지 않게 하기 위함
} & Partial<IProblem>;

function ProblemCard(props: ProblemCardProps) {
  const {
    index,
    id,
    level,
    problemLevel,
    title = '문제 제목',
    theme = 'light',
  } = props;

  const levelImgSrc = `https://static.solved.ac/tier_small/${
    problemLevel || level
  }.svg`;

  return (
    <ContentWrapper {...props}>
      {typeof index === 'number' && (
        <IndexLabel>
          <P level={3} fontWeight={500} color={WHITE}>
            {index}
          </P>
        </IndexLabel>
      )}
      <ImgWrapper theme={theme}>
        <Img src={levelImgSrc} alt={title} height="8rem" />
      </ImgWrapper>
      <StyledP theme={theme}>{id}</StyledP>
      <StyledP theme={theme}>{title}</StyledP>
    </ContentWrapper>
  );
}

export default React.memo(ProblemCard);

const ContentWrapper = (
  props: ProblemCardProps & { children: ReactNode | ReactNodeArray }
) => {
  const { isRouting = true, className, id, children, theme = 'light' } = props;
  if (isRouting) {
    return (
      <StyledLink theme={theme} href={`/problems/${id}`} className={className}>
        {children}
      </StyledLink>
    );
  }
  return <Wrapper className={className}>{children}</Wrapper>;
};

const StyledLink = styled(Link)<{ theme: Theme }>`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 22.4rem;
  height: 27.2rem;
  margin-right: 1.2rem;
  padding: 2rem 2rem 0.8rem;
  border: 1px solid ${({ theme }) => GREY[theme === 'light' ? 400 : 850]};
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

const ImgWrapper = styled.div<{ theme: Theme }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 14rem;
  background-color: ${({ theme }) => GREY[theme === 'light' ? 100 : 500]};
  border: 1px solid ${({ theme }) => GREY[theme === 'light' ? 400 : 500]};
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

const StyledP = styled(P).attrs({
  level: 4,
  width: '100%',
  ellipsis: true,
})<{ theme: Theme }>`
  margin-bottom: 1.2rem;
  color: ${({ theme }) => GREY[theme === 'light' ? 800 : 400]};
`;
