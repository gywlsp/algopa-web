import React from 'react';
import styled from 'styled-components';

import Section from 'src/components/common/section';
import ProblemCard from 'src/components/common/card/problem';
import ProblemCardSkeleton from '../skeletons/card/problem';
import HorizontalScrollable from 'src/components/common/horizontal-scrollable';

import { useRecommendedProblemList } from 'src/hooks/api/problem';
import { ProblemListRequestParams } from 'src/types/problem';

export type RecommendedProblemsSectionProps = Pick<
  ProblemListRequestParams,
  'type' | 'problemId'
>;

const SECTION_TITLE = {
  next: '다음으로 풀면 좋은 문제들이에요 😉',
  wrong: '이런 유형의 문제를 많이 틀려요 😢',
  less: '이런 유형의 문제를 많이 풀지 않았어요 🧐',
};

export default function RecommendedProblemsSection({
  type = 'next',
  problemId,
}: RecommendedProblemsSectionProps) {
  const { data: problems } = useRecommendedProblemList(
    problemId ? { limit: 4, problemId } : { limit: 8, type }
  );
  const theme = problemId ? 'dark' : 'light';

  return (
    <Section size="medium" title={SECTION_TITLE[type]} theme={theme}>
      <HorizontalScrollable>
        {problems?.map((problem, i) => (
          <StyledProblemCard key={i} index={i + 1} {...problem} theme={theme} />
        ))}
        {!problems &&
          [...Array(8)].map((_, i) => (
            <ProblemCardSkeleton key={i} isLast={i === 7} theme={theme} />
          ))}
      </HorizontalScrollable>
    </Section>
  );
}

export const StyledProblemCard = styled(ProblemCard)`
  width: 23.2rem;
`;
