import React from 'react';
import styled from 'styled-components';

import ProblemCard from 'src/components/common/card/problem';
import Modal from 'src/components/common/modal';

import { RoadmapProblemNode } from 'src/types/roadmap';

export type RoadmapProblemInfoModalProps = {
  isOpen: boolean;
  onClose: () => void;
} & RoadmapProblemNode;

export default function RoadmapProblemInfoModal({
  isOpen,
  onClose,
  ...problemNodeData
}: RoadmapProblemInfoModalProps) {
  return (
    <Modal
      title="문제 정보"
      isOpen={isOpen}
      onClose={onClose}
      okText="문제 풀기"
      okHref={`/problems/${problemNodeData.problemId}`}
      contentWrapperStyle={{ padding: '2rem 2rem 0.8rem' }}
    >
      <StyledProblemCard
        {...problemNodeData}
        id={problemNodeData.problemId}
        isRouting={false}
      />
    </Modal>
  );
}

const StyledProblemCard = styled(ProblemCard)`
  border: none;
  margin-right: 0;
`;
