import dynamic from 'next/dynamic';
import React from 'react';

const Modal = dynamic(() => import('src/components/common/modal'));
const Content = dynamic(() => import('./content'));

export type RoadmapGuideModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

function RoadmapGuideModal({ isOpen, onClose }: RoadmapGuideModalProps) {
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

export default React.memo(RoadmapGuideModal);
