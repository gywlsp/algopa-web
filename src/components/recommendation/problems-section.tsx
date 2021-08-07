import React from 'react';
import styled from 'styled-components';

import Section from 'src/components/common/section';
import ProblemCard from 'src/components/common/card/problem';
import ProblemCardSkeleton from '../skeletons/card/problem';
import HorizontalScrollable from 'src/components/common/horizontal-scrollable';

import { useProblemList } from 'src/hooks/api/problem';
import { ProblemListRequestParams } from 'src/types/problem';

export type RecommendedProblemsSectionProps = Pick<
  ProblemListRequestParams,
  'type'
>;

const SECTION_TITLE = {
  next: '다음으로 풀면 좋은 문제들이에요 😉',
  wrong: '이런 유형의 문제를 많이 틀려요 😢',
  less: '이런 유형의 문제를 많이 풀지 않았어요 🧐',
};

export default function RecommendedProblemsSection({
  type,
}: RecommendedProblemsSectionProps) {
  const { data: problems } = useProblemList({ limit: 8, type });

  return (
    <Section size="medium" title={SECTION_TITLE[type]}>
      <HorizontalScrollable>
        {problems?.map((problem, i) => (
          <StyledProblemCard key={i} index={i + 1} {...problem} />
        ))}
        {!problems &&
          [...Array(8)].map((_, i) => (
            <ProblemCardSkeleton key={i} isLast={i === 7} />
          ))}
      </HorizontalScrollable>
    </Section>
  );
}

export const StyledProblemCard = styled(ProblemCard)`
  width: 23.2rem;
`;
