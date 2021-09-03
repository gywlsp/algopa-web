import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import ProblemDetailHeader from 'src/components/problem-detail/header';
import ProblemContentSection from 'src/components/problem-detail/section/problem-content';
import ProblemCodeSection from 'src/components/problem-detail/section/code';

import ProblemService from 'src/services/api/problem';
import { IProblemReadDTO } from 'src/interfaces/problem/IProblem';
import { useCodeList } from 'src/hooks/api/code';

export default function ProblemDetailPage({
  id,
  title,
  contentHTML,
}: IProblemReadDTO) {
  const { data: codes } = useCodeList(id);
  const [selectedCodeId, setSelectedCodeId] = useState(undefined);

  useEffect(() => {
    if (codes && !selectedCodeId) {
      setSelectedCodeId(codes[0].id);
    }
  }, [codes]);

  const selectedCode = codes?.find((code) => code.id === selectedCodeId);
  const selectCode = (id: string) => {
    setSelectedCodeId(id);
  };

  return (
    <Wrapper>
      <ProblemDetailHeader
        id={id}
        title={title}
        codes={codes}
        selectedCodeId={selectedCodeId}
        selectCode={selectCode}
      />
      <ContentWrapper>
        <ProblemContentSection contentHTML={contentHTML} />
        <ProblemCodeSection code={selectedCode} />
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
