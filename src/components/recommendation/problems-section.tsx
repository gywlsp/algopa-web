import React from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import { useRecoilValue } from 'recoil';

const Section = dynamic(() => import('src/components/common/section'));
const HorizontalScrollable = dynamic(
  () => import('src/components/common/horizontal-scrollable')
);
const ProblemCard = dynamic(() => import('src/components/common/card/problem'));
const ProblemCardSkeleton = dynamic(() => import('../skeletons/card/problem'));
const ProblemCategorySwitch = dynamic(
  () => import('src/components/common/category/switch')
);
import P from 'src/components/common/p';

import { ProblemListRequestParams } from 'src/types/problem';
import { selectedCompany } from 'src/modules/atoms/problem';
import { useRecommendedProblemList } from 'src/hooks/problem';

export type RecommendedProblemsSectionProps = Pick<
  ProblemListRequestParams,
  'type' | 'problemId'
>;

const SECTION_TITLE = {
  next: '다음으로 풀면 좋은 문제들이에요 😉',
  wrong: '이런 유형의 문제를 많이 틀려요 😢',
  less: '이런 유형의 문제를 많이 풀지 않았어요 🧐',
};

function RecommendedProblemsSection({
  type = 'next',
  problemId,
}: RecommendedProblemsSectionProps) {
  const company = useRecoilValue(selectedCompany);
  const { data: problems } = useRecommendedProblemList(
    problemId
      ? { limit: 4, problemId }
      : { limit: 8, type, ...(company ? { company } : {}) }
  );
  const theme = problemId ? 'dark' : 'light';

  return (
    <Section
      size="medium"
      title={SECTION_TITLE[type]}
      theme={theme}
      rightComponent={theme === 'dark' ? <ProblemCategorySwitch /> : undefined}
    >
      <HorizontalScrollable>
        {problems?.map((problem, i) => (
          <StyledProblemCard key={i} index={i + 1} {...problem} theme={theme} />
        ))}
        {!problems &&
          [...Array(8)].map((_, i) => (
            <ProblemCardSkeleton key={i} isLast={i === 7} theme={theme} />
          ))}
      </HorizontalScrollable>
      {problems?.length === 0 && (
        <GuideWrapper>
          <P level={2}>
            풀이 이력이 없습니다. 문제를 풀어주세요! <I>🤓</I>
          </P>
        </GuideWrapper>
      )}
    </Section>
  );
}

export default React.memo(RecommendedProblemsSection);

const StyledProblemCard = styled(ProblemCard)`
  width: 23.2rem;
`;

const GuideWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 27.2rem;
  padding-bottom: 2rem;
`;

const I = styled.i`
  font-size: 1.6rem;
`;
