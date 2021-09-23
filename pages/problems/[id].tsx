import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import ProblemDetailHeader from 'src/components/problem-detail/header';
import ProblemContentSection from 'src/components/problem-detail/section/problem-content';
import ProblemCodeSection from 'src/components/problem-detail/section/code';
import ProblemContentSkeleton from 'src/components/skeletons/problem-content';
import { GREY } from 'src/constants/colors';

import { useCodeList } from 'src/hooks/api/code';
import { useRecentAuthTokens } from 'src/hooks/api/auth';
import { useProblem } from 'src/hooks/api/problem';

export default function ProblemDetailPage() {
  useRecentAuthTokens(true);
  const router = useRouter();
  const { data } = useProblem(+router.query.id);
  const { data: codes } = useCodeList(data?.id);
  const [selectedCodeId, setSelectedCodeId] = useState(undefined);

  useEffect(() => {
    if (codes && codes[0].id !== selectedCodeId) {
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
        id={data?.id}
        title={data?.title}
        codes={codes}
        selectedCodeId={selectedCodeId}
        selectCode={selectCode}
      />
      <ContentWrapper>
        {data && <ProblemContentSection contentHTML={data?.contentHTML} />}
        {!data && <ProblemContentSkeleton />}
        <ProblemCodeSection code={selectedCode} />
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
  background-color: ${GREY[850]};
`;
