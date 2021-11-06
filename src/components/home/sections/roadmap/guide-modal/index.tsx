import React from 'react';

import Modal from 'src/components/common/modal';
import Content from './content';

export type RoadmapGuideModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function RoadmapGuideModal({
  isOpen,
  onClose,
}: RoadmapGuideModalProps) {
  return (
    <Modal
      title="로드맵 이용 가이드"
      isOpen={isOpen}
      onClose={onClose}
      size="large"
      okText="확인"
      contentWrapperStyle={{ padding: '2rem' }}
    >
      <Content />
    </Modal>
  );
}
