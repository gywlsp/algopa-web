import React from 'react';
import styled from 'styled-components';

import ProblemDetailHeader from 'src/components/problem-detail/header';
import ProblemContentSection from 'src/components/problem-detail/section/problem-content';
import CodeEditSection from 'src/components/problem-detail/section/code';

import ProblemService from 'src/services/api/problem';
import { IProblemReadDTO } from 'src/interfaces/problem/IProblem';

export default function ProblemDetailPage(problemInfo: IProblemReadDTO) {
  const { number, title, contentHTML } = problemInfo;

  return (
    <Wrapper>
      <ProblemDetailHeader number={number} title={title} />
      <ContentWrapper>
        <ProblemContentSection contentHTML={contentHTML} />
        <CodeEditSection />
      </ContentWrapper>
    </Wrapper>
  );
}

export async function getServerSideProps({ params }) {
  const data = await ProblemService.read(params.id);

  return {
    props: data, // will be passed to the page component as props
  };
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
