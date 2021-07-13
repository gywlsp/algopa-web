import React from 'react';
import styled from 'styled-components';

import ProblemCard from '../common/card/problem';
import Modal from '../common/modal';

export type RoadmapProblemModalProps = {
  id: string;
  level?: string;
  label: string;
  isOpen: boolean;
  onClose: () => void;
};

export default function RoadmapProblemModal({
  id,
  level,
  label,
  isOpen,
  onClose,
}: RoadmapProblemModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      okText="문제 풀기"
      okHref={`/problems/${id}`}
      contentWrapperStyle={{ padding: '2rem 2rem 0.8rem' }}
    >
      <StyledProblemCard
        id={id}
        title={label}
        level={level}
        isRouting={false}
      />
    </Modal>
  );
}

const StyledProblemCard = styled(ProblemCard)`
  border: none;
  margin-right: 0;
`;
