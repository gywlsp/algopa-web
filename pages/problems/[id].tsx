import React from 'react';
import styled from 'styled-components';

import ProblemDetailHeader from 'src/components/problem-detail/header';
import ProblemContentSection from 'src/components/problem-detail/section/problem-content';
import CodeEditSection from 'src/components/problem-detail/section/code';

export default function ProblemDetailPage() {
  return (
    <Wrapper>
      <ProblemDetailHeader />
      <ContentWrapper>
        <ProblemContentSection />
        <CodeEditSection />
      </ContentWrapper>
    </Wrapper>
  );
}

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
  background-color: #1e1e1e;
`;
