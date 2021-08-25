import React from 'react';
import styled from 'styled-components';

import ProblemCard from '../common/card/problem';
import Modal from '../common/modal';

import { RoadmapProblemNode } from 'src/types/roadmap';

export type RoadmapProblemInfoModalProps = {
  isOpen: boolean;
  onClose: () => void;
} & Omit<RoadmapProblemNode, 'id'>;

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
      okHref={`/problems/${problemNodeData.number}`}
      contentWrapperStyle={{ padding: '2rem 2rem 0.8rem' }}
    >
      <StyledProblemCard {...problemNodeData} isRouting={false} />
    </Modal>
  );
}

const StyledProblemCard = styled(ProblemCard)`
  border: none;
  margin-right: 0;
`;
