import React from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

const RecommendedProblemsSection = dynamic(
  () => import('src/components/recommendation/problems-section')
);
const P = dynamic(() => import('src/components/common/p'));
const Modal = dynamic(() => import('src/components/common/modal'));
import { BLUE_GREEN } from 'src/constants/colors';

import { useCodeRunContext } from 'src/modules/context/code-run';

export default function CodeSolveCompleteModal() {
  const router = useRouter();
  const problemId = +router.query.id;
  const {
    state: { isCompleteModalOpen },
    action: { closeCompleteModal },
  } = useCodeRunContext();

  return (
    <Modal
      theme="dark"
      size="large"
      title="채점 결과"
      isOpen={isCompleteModalOpen}
      onClose={closeCompleteModal}
      okText="확인"
      onOk={closeCompleteModal}
    >
      <Title>맞았습니다! 🎉</Title>
      <RecommendedProblemsSection problemId={problemId} />
    </Modal>
  );
}

const Title = styled(P).attrs({
  level: 9,
  fontWeight: 700,
  color: BLUE_GREEN[400],
})`
  margin-bottom: 1.2rem;
`;
