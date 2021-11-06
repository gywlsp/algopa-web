import React from 'react';
import styled from 'styled-components';

import P from 'src/components/common/p';
import Img from 'src/components/common/img';

export default function RoadmapGuideModalGraphContent() {
  return (
    <Wrapper>
      <Title>그래프</Title>
      <Row>
        <StyledImg src="/images/graph-node.png" alt="graph" />
      </Row>
      <UL>
        <Li>
          그래프는 <Strong>유형 노드</Strong>(사각형)와{' '}
          <Strong>문제 노드</Strong>(원)로 이루어져 있어요.
        </Li>
        <Li>
          각 <Strong>유형별로 속해있는 문제들을 확인</Strong>할 수 있어요.
        </Li>
        <Li>
          유형 <Strong>오답률</Strong>에 따라 유형 노드의 배경색이 달라져요.
        </Li>
        <Li>
          <Strong>푼 문제는 파란색 테두리</Strong>로 표시돼요.
        </Li>
        <Li>
          노드를 <Strong>클릭하면 그래프가 해당 노드로 이동</Strong>해요.
        </Li>
        <Li>
          <Strong>문제 노드를 더블클릭하면 해당 문제의 정보를 확인</Strong>할 수
          있어요.
        </Li>
      </UL>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 1.6rem;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
`;

const Title = styled(P).attrs({
  level: 4,
  fontWeight: 500,
})``;

const StyledImg = styled(Img).attrs({
  width: 'auto',
  height: '6rem',
})`
  margin-right: 0.4rem;
`;

const UL = styled.ul``;

const Li = styled.li`
  font-size: 1.4rem;
  list-style-type: disc;
  margin-left: 2rem;
  line-height: 1.8;
`;

const Strong = styled.strong`
  font-weight: 500;
`;
