import React from 'react';
import styled from 'styled-components';

import GlobalLayout from 'src/layouts/global';
import Roadmap from 'src/components/roadmap';
import Section from 'src/components/common/section';
import Link from 'src/components/common/link';
import ProblemCard from 'src/components/common/card/problem';
import ChevronRightIcon from 'src/assets/icons/chevron/right';
import { GREY, WHITE } from 'src/constants/colors';

import { useProblemList } from 'src/hooks/api/problem';

export default function Home() {
  const { data: recommendedProblems } = useProblemList({ limit: 4 });
  return (
    <GlobalLayout>
      <StyledSection title="박효진님을 위한 추천 문제">
        <CardsWrapper>
          <MoreLink href="/recommendation">
            <ChevronRightIcon
              style={{ width: '2rem', height: '2rem', margin: '1.2rem 0' }}
              fill={WHITE}
            />
            <P>더 보기</P>
          </MoreLink>
          {recommendedProblems?.reverse().map((problem, i) => (
            <ProblemCard key={i} {...problem} />
          ))}
          {
            /* @TO_BE_IMPROVED: dummy 데이터 */ !recommendedProblems &&
              [...Array(4)].map((_, i) => <ProblemCard key={i} />)
          }
        </CardsWrapper>
      </StyledSection>
      <Section title="취업으로 가는 코딩 테스트 준비 로드맵 🚀">
        <Roadmap />
      </Section>
    </GlobalLayout>
  );
}

const StyledSection = styled(Section)`
  margin-bottom: 4rem;
`;

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  height: 27.2rem;
  overflow-y: hidden;
`;

const P = styled.p`
  font-size: 1.8rem;
  margin-bottom: 1.2rem;
  color: ${WHITE};
`;

const MoreLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  min-width: 24rem;
  height: 27.2rem;
  padding: 2rem;
  border: 1px solid ${GREY[400]};
  background-color: rgba(0, 0, 0, 0.4);
`;
