import React from 'react';
import styled from 'styled-components';

import ProblemCard from '../common/card/problem';
import Modal from '../common/modal';

import { RoadmapProblemNode } from 'src/types/roadmap';
import { bojLink } from 'src/data';

export type RoadmapProblemModalProps = {
  isOpen: boolean;
  onClose: () => void;
} & Omit<RoadmapProblemNode, 'id'>;

export default function RoadmapProblemModal({
  isOpen,
  onClose,
  ...problemNodeData
}: RoadmapProblemModalProps) {
  return (
    <Modal
      title="문제 정보"
      isOpen={isOpen}
      onClose={onClose}
      okText="문제 풀기"
      okHref={`${bojLink}/problem/${problemNodeData.number}`}
      isOkHrefExternal
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
