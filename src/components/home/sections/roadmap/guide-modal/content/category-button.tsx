import React from 'react';
import styled from 'styled-components';

import P from 'src/components/common/p';
import Img from 'src/components/common/img';

export default function RoadmapGuideModalCategoryButtonContent() {
  return (
    <Wrapper>
      <Title>유형 버튼</Title>
      <Row>
        <StyledImg
          src="/images/category-button/is-logout.png"
          alt="is-logout"
        />
        <StyledImg src="/images/category-button/is-login.png" alt="is-login" />
      </Row>
      <UL>
        <Li>
          <Strong>유형 공부 순서 번호, 이름, 문제 수</Strong>를 확인할 수
          있어요.
        </Li>
        <Li>
          로그인시 유형별로 <Strong>푼 문제 수</Strong>와{' '}
          <Strong>오답률</Strong>을 확인할 수 있어요.
        </Li>
        <Li>
          유형 <Strong>오답률</Strong>에 따라 버튼의 배경색이 달라져요. 취약한
          유형을 쉽게 파악할 수 있겠죠? 😉
        </Li>
        <Li>
          버튼을 <Strong>클릭하면 그래프가 해당 유형으로 이동</Strong>해요.
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
})`
  margin-bottom: 1.2rem;
`;

const StyledImg = styled(Img).attrs({
  width: 'auto',
  height: '2.8rem',
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
