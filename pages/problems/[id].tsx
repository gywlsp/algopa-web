import React from 'react';
import styled from 'styled-components';

import ProblemDetailHeader from 'src/components/problem-detail/header';
import ProblemSection from 'src/components/problem-detail/section/problem';
import CodeSection from 'src/components/problem-detail/section/code';
import { GREY } from 'src/constants/colors';

import { useRecentAuthTokens } from 'src/hooks/api/auth';
import { withCodeRunContext } from 'src/modules/context/code-run';

function ProblemDetailPage() {
  useRecentAuthTokens(true);

  return (
    <Wrapper>
      <ProblemDetailHeader />
      <ContentWrapper>
        <ProblemSection />
        <CodeSection />
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
