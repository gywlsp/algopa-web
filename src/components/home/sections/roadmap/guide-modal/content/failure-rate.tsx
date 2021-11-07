import React from 'react';
import styled from 'styled-components';

import P from 'src/components/common/p';
import {
  BLUE_GREEN,
  GREY,
  PASTEL_BLUE,
  PASTEL_RED,
  PASTEL_YELLOW,
} from 'src/constants/colors';

const COLOR_DATA = [
  { label: '기본', color: BLUE_GREEN[100] },
  { label: '오답률 하', color: PASTEL_BLUE },
  { label: '오답률 중', color: PASTEL_YELLOW },
  { label: '오답률 상', color: PASTEL_RED },
];

export default function RoadmapGuideModalFailureRateContent() {
  return (
    <Wrapper>
      <Title>오답률</Title>
      <UL>
        <Li>유형 버튼과 노드에 오답률이 다음과 같이 표시돼요.</Li>
      </UL>
      <ColorsWrapper>
        {COLOR_DATA.map(({ color, label }) => (
          <Row key={label}>
            <Circle backgroundColor={color} />
            <P level={2}>{label}</P>
          </Row>
        ))}
      </ColorsWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 0.8rem;
`;

const ColorsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.4rem;
  margin-left: 2rem;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-right: 2rem;
`;

const Title = styled(P).attrs({
  level: 4,
  fontWeight: 500,
})`
  margin-bottom: 0.8rem;
`;

const UL = styled.ul``;

const Li = styled.li`
  font-size: 1.4rem;
  list-style-type: disc;
  margin-left: 2rem;
  line-height: 1.8;
`;

const Circle = styled.div<{ backgroundColor: string }>`
  width: 1.6rem;
  height: 1.6rem;
  margin-top: 0.2rem;
  margin-right: 0.8rem;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: 1px solid ${GREY[500]};
  border-radius: 999px;
`;
