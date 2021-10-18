import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import ProblemDetailHeader from 'src/components/problem-detail/header';
import ProblemContentSection from 'src/components/problem-detail/section/problem-content';
import ProblemContentSkeleton from 'src/components/skeletons/problem-content';
import ProblemCodeSection from 'src/components/problem-detail/section/code';
import CodeHistorySection from 'src/components/problem-detail/section/history';
import CodeNoteSection from 'src/components/problem-detail/section/note';
import { GREY } from 'src/constants/colors';

import { useRecentAuthTokens } from 'src/hooks/api/auth';
import { useProblem } from 'src/hooks/api/problem';
import { problemPageRightSectionType } from 'src/modules/atoms/problem';
import { useCodeEvents } from 'src/hooks/api/code';
import { withCodeRunContext } from 'src/modules/context/code-run';

function ProblemDetailPage() {
  const router = useRouter();
  const { data } = useProblem(+router.query.id);
  const rightSectionType = useRecoilValue(problemPageRightSectionType);
  useRecentAuthTokens(true);
  useCodeEvents();

  return (
    <Wrapper>
      <ProblemDetailHeader />
      <ContentWrapper>
        {data && <ProblemContentSection />}
        {!data && <ProblemContentSkeleton />}
        <ProblemCodeSection isShown={rightSectionType === 'code'} />
        <CodeHistorySection isShown={rightSectionType === 'history'} />
        <CodeNoteSection isShown={rightSectionType === 'note'} />
      </ContentWrapper>
    </Wrapper>
  );
}

export default withCodeRunContext(ProblemDetailPage);

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: hidden;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  padding-top: 4.4rem;
  background-color: ${GREY[850]};
`;
