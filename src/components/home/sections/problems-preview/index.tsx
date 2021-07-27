import React from 'react';
import styled from 'styled-components';

import Section from 'src/components/common/section';
import ProblemCard from 'src/components/common/card/problem';
import MoreButton from './more-button';
import ProblemCardSkeleton from 'src/components/skeletons/card/problem';

import { useProblemList } from 'src/hooks/api/problem';
import { useMe } from 'src/hooks/api/user';

export default function ProblemsPreviewSection() {
  const { data: userData } = useMe();
  const { data: recommendedProblems } = useProblemList({ limit: 4 });

  const sectionTitle = userData
    ? `${userData.nickname}님을 위한 추천 문제`
    : '이런 문제 어때요?';

  return (
    <Wrapper title={sectionTitle}>
      <CardsWrapper>
        {recommendedProblems && <MoreButton isLoggedIn={!!userData} />}
        {recommendedProblems?.reverse().map((problem, i) => (
          <ProblemCard key={i} {...problem} />
        ))}
        {!recommendedProblems &&
          [...Array(5)].map((_, i) => (
            <ProblemCardSkeleton key={i} isLast={i === 0} />
          ))}
      </CardsWrapper>
    </Wrapper>
  );
}

const Wrapper = styled(Section)`
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
