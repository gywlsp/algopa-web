import React from 'react';
import styled from 'styled-components';

import GlobalLayout from 'src/layouts/global';
import Section from 'src/components/common/section';
import ProblemCard from 'src/components/common/card/problem';
import HorizontalScrollable from 'src/components/common/horizontal-scrollable';

export default function RecommendationPage() {
  return (
    <GlobalLayout>
      <Section title="박효진님을 위한 추천 문제">
        <Section size="medium" title="다음으로 풀면 좋은 문제들이에요 😉">
          <HorizontalScrollable>
            {[...Array(8)].map((_, i) => (
              <StyledProblemCard key={i} index={i + 1} />
            ))}
          </HorizontalScrollable>
        </Section>
        <Section size="medium" title="이런 유형의 문제를 많이 틀려요 😢">
          <HorizontalScrollable>
            {[...Array(8)].map((_, i) => (
              <StyledProblemCard key={i} index={i + 1} />
            ))}
          </HorizontalScrollable>
        </Section>
        <Section size="medium" title="이런 유형의 문제를 많이 풀지 않았어요 🧐">
          <HorizontalScrollable>
            {[...Array(8)].map((_, i) => (
              <StyledProblemCard key={i} index={i + 1} />
            ))}
          </HorizontalScrollable>
        </Section>
      </Section>
    </GlobalLayout>
  );
}

const StyledProblemCard = styled(ProblemCard)`
  min-width: 23.2rem;
`;
