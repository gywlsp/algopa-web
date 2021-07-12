import React from 'react';
import styled from 'styled-components';

import GlobalLayout from 'src/layouts/global';
import Roadmap from 'src/components/roadmap';
import Section from 'src/components/common/section';
import Link from 'src/components/common/link';
import ProblemCard from 'src/components/common/card/problem';
import ChevronRightIcon from 'src/assets/icons/chevron/right';
import { BLUE_GREEN, WHITE } from 'src/constants/colors';

export default function Home() {
  return (
    <GlobalLayout>
      <StyledSection title="박효진님을 위한 추천 문제">
        <CardsWrapper>
          {[...Array(4)].map((_, i) => (
            <ProblemCard key={i} />
          ))}
          <MoreLink href="/recommended-problems">
            <ChevronRightIcon
              style={{ width: '2rem', height: '2rem', margin: '1.2rem 0' }}
              fill={WHITE}
            />
            <P>더 보기</P>
          </MoreLink>
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
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
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
  padding: 2rem;
  border: 1px solid ${BLUE_GREEN[500]};
  background-color: rgba(0, 0, 0, 0.4);
`;
