import React from 'react';
import { BLUE_GREEN } from 'src/constants/colors';
import styled, { CSSProperties } from 'styled-components';

export type ProblemCardProps = {
  wrapperStyle?: CSSProperties;
  id?: number;
  title?: string;
};

export default function ProblemCard({
  wrapperStyle,
  id = 1260,
  title = '문제 제목',
}: ProblemCardProps) {
  return (
    <Wrapper style={wrapperStyle}>
      <Level>난이도</Level>
      <P>{id}</P>
      <P>{title}</P>
    </Wrapper>
  );
}

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
