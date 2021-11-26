import React from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import { useRecoilValue } from 'recoil';

const Section = dynamic(() => import('src/components/common/section'));
const ProblemCard = dynamic(() => import('src/components/common/card/problem'));
const MoreButton = dynamic(() => import('./more-button'));
const ProblemCardSkeleton = dynamic(
  () => import('src/components/skeletons/card/problem')
);
const ProblemCategorySwitch = dynamic(
  () => import('src/components/common/category/switch')
);

import { useRecommendedProblemList } from 'src/hooks/api/problem';
import { useMe } from 'src/hooks/api/user';
import { selectedCompany } from 'src/modules/atoms/problem';

export default function ProblemsPreviewSection() {
  const company = useRecoilValue(selectedCompany);
  const { data: userData } = useMe();
  const { data: recommendedProblems } = useRecommendedProblemList({
    limit: 4,
    ...(company ? { company } : {}),
  });

  const sectionTitle = userData
    ? `${userData.nickname}님을 위한 추천 문제 🔍`
    : '이런 문제 어때요?';

  return (
    <Wrapper title={sectionTitle} rightComponent={<ProblemCategorySwitch />}>
      <CardsWrapper>
        {recommendedProblems && (
          <>
            <MoreButton isLoggedIn={!!userData} />
            {[...recommendedProblems].reverse().map((problem, i) => (
              <ProblemCard key={i} {...problem} />
            ))}
          </>
        )}
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
  overflow-y: hidden;
`;
